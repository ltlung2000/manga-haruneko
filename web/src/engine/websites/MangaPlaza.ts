﻿import { Tags } from '../Tags';
import icon from './MangaPlaza.webp';
import { Chapter, DecoratableMangaScraper, type Manga } from '../providers/MangaPlugin';
import * as Common from './decorators/Common';
import * as SpeedBinb from './decorators/SpeedBinb';
import { FetchJSON } from '../platform/FetchProvider';

type APIChapterResult = {
    data: {
        html_content: string,
        html_page: string
    }
}

@Common.MangaCSS(/^{origin}\/title\/\d+\/$/, 'div.mainTitle h1.titleTxt')
@Common.MangasNotSupported()
@SpeedBinb.PagesSinglePageAjax(true)
@SpeedBinb.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('mangaplaza', `MangaPlaza`, ' https://mangaplaza.com', Tags.Language.Japanese, Tags.Media.Manga, Tags.Source.Official);
    }

    public override get Icon() {
        return icon;
    }

    public override async FetchChapters(manga: Manga): Promise<Chapter[]> {
        const chapters: Chapter[] = [];
        const mangaid = manga.Identifier.match(/title\/(\d+)/)[1];
        let page = 1;
        let pageMax = 1;

        while (page <= pageMax) {
            const request = new Request(new URL(`/api/title/content_list/?title_id=${mangaid}&content_id=0&page=${page}&order=down&_=${Date.now().toString()}`, this.URI));
            const { data } = await FetchJSON<APIChapterResult>(request);
            const chaptersNodes = [...new DOMParser().parseFromString(data.html_content, 'text/html').querySelectorAll<HTMLElement>('ul.detailBox div.inner_table')];
            for (const chapterNode of chaptersNodes) {
                const title = chapterNode.querySelector('p.titleName').textContent.trim();
                const linkNode = chapterNode.querySelector<HTMLAnchorElement>('div.btnBlock a.prevBtn');
                if (linkNode) chapters.push(new Chapter(this, manga, linkNode.pathname + linkNode.search, title));
            }

            if (page == 1 && data.html_page != '') {
                pageMax = parseInt(new DOMParser().parseFromString(data.html_page, 'text/html').querySelector<HTMLAnchorElement>('ul#_pages li:nth-last-of-type(2) a').dataset.page);
            }
            page++;
        }

        return chapters.distinct();
    }
}