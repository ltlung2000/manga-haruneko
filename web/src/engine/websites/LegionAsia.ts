// Auto-Generated export from HakuNeko Legacy
import { Tags } from '../Tags';
import icon from './LegionAsia.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as MangaStream from './decorators/WordPressMangaStream';
import * as Common from './decorators/Common';

@MangaStream.MangaCSS(/^https?:\/\/legionasia\.com\/manga\/[^/]+\/$/)
@MangaStream.MangasSinglePageCSS()
@MangaStream.ChaptersSinglePageCSS()
@MangaStream.PagesSinglePageCSS()
@Common.ImageDirect()
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('legionasia', 'LegionAsia', 'https://legionasia.com', Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.Spanish);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
class LegionAsia extends WordPressMangastream {

    constructor() {
        super();
        super.id = 'legionasia';
        super.label = 'LegionAsia';
        this.tags = [ 'webtoon', 'spanish' ];
        this.url = 'https://legionasia.com';
        this.path = '/manga/list-mode/';
    }
}
*/