import { Tags } from '../Tags';
import icon from './MangaTR.webp';
import { Chapter, DecoratableMangaScraper, type Manga } from '../providers/MangaPlugin';
import { FetchCSS, FetchWindowScript } from '../platform/FetchProvider';
import * as Common from './decorators/Common';
import * as FlatManga from './decorators/FlatManga';

function MangaLabelExtractor(element: HTMLTitleElement) {
    return element.text.split(' - ')[0].trim();
}

@Common.MangaCSS(/^{origin}\/manga-[^/]+\.html$/, 'body title', MangaLabelExtractor)
@Common.MangasSinglePageCSS('/manga-list.html', FlatManga.queryMangas)
@FlatManga.PagesSinglePageCSS('img.chapter-img')
@Common.ImageAjax()

export default class extends DecoratableMangaScraper {
    public constructor() {
        super('mangatr', `Manga-TR`, 'https://manga-tr.com', Tags.Language.Turkish, Tags.Media.Manga, Tags.Source.Aggregator);
    }
    public override get Icon() {
        return icon;
    }

    public override async Initialize(): Promise<void> {
        const uri = new URL('/manga-list.html', this.URI);
        const request = new Request(uri.href);
        return FetchWindowScript(request, `window.cookieStore.set('read_type', '1')`, 0, 30000);
    }

    public override async FetchChapters(manga: Manga): Promise<Chapter[]> {
        const chapterList = [];
        for (let page = 1, run = true; run; page++) {
            const chapters = await this.getChaptersFromPage(manga, page);
            chapters.length > 0 ? chapterList.push(...chapters) : run = false;
        }
        return chapterList.distinct();
    }
    private async getChaptersFromPage(manga: Manga, page: number): Promise<Chapter[]>{
        const mangaslug = manga.Identifier.match(/manga-([^/]+)\.html/)[1];
        const url = new URL('/cek/fetch_pages_manga.php?manga_cek=' + mangaslug, this.URI);
        const request = new Request(url.href, {
            method: 'POST',
            body: 'page=' + page,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-requested-with': 'XMLHttpRequest'
            }
        });

        const data = await FetchCSS<HTMLAnchorElement>(request, 'table.table tr td.table-bordered:first-of-type > a');
        const escapedMangaTitle = manga.Title.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
        const regexp = new RegExp(escapedMangaTitle, 'i');
        return data.map(chapter => new Chapter(this, manga, chapter.pathname, chapter.text.replace(regexp, '').trim()));
    }

}