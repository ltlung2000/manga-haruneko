import { Tags } from '../Tags';
import icon from './RawInu.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Common from './decorators/Common';
import * as FlatManga from './decorators/FlatManga';
import { FetchWindowScript } from '../platform/FetchProvider';

@Common.MangaCSS(/^{origin}\/[^.]+\.html$/, 'li.breadcrumb-item.active', FlatManga.MangaLabelExtractor)
@Common.MangasMultiPageCSS(FlatManga.pathMultiPageManga, FlatManga.queryMangas, 1, 1, 0, FlatManga.MangaExtractor)
@FlatManga.ChaptersSinglePageAJAX('/app/manga/controllers/cont.Listchapter.php?slug=', 'sLugs')
@FlatManga.PagesSinglePageAJAX('/app/manga/controllers/cont.imagesChap.php?cid=')
@Common.ImageAjax()
export default class extends DecoratableMangaScraper {
    public constructor() {
        super('rawinu', `RawInu`, 'https://rawinu.com', Tags.Media.Manga, Tags.Language.Japanese, Tags.Source.Aggregator);
    }

    public override get Icon() {
        return icon;
    }

    public override async Initialize(): Promise<void> {
        return await FetchWindowScript(new Request(new URL('/manga-list.html', this.URI)), 'true', 3000, 15000);//trigger antiDDOSS
    }
}