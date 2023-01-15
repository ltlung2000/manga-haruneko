import { Tags } from '../Tags';
import icon from './TrueManga.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as MadTheme from './decorators/Common';

function ImageExtractor(element: HTMLImageElement): string {
    return element.dataset.src;
}

@MadTheme.MangaCSS(/^https?:\/\/truemanga\.com\/[^/]+$/, 'div.name.box h1')
@MadTheme.MangasMultiPageCSS('/az-list?page={page}', 'div.list div.title h3 a', 1)
@MadTheme.ChaptersSinglePageCSS('ul.chapter-list li a', MadTheme.AnchorInfoExtractor(false, '.chapter-update'))
@MadTheme.PagesSinglePageCSS('div.chapter-image img', ImageExtractor)
@MadTheme.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('truemanga', 'TrueManga', 'https://truemanga.com', Tags.Media.Manga, Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.English, Tags.Source.Aggregator);
    }

    public override get Icon() {
        return icon;
    }
}