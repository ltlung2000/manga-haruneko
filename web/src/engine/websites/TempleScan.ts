import { Tags } from '../Tags';
import icon from './TempleScan.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as HeamCMS from './decorators/HeanCMS';

const apiUrl = 'https://templescan.net/apiv1';

@HeamCMS.MangaCSS(/^{origin}\/comic\/[^/]+$/, apiUrl)
@HeamCMS.MangasMultiPageAJAX(apiUrl)
@HeamCMS.ChaptersSinglePageAJAXv1(apiUrl)
@HeamCMS.PagesSinglePageAJAX(apiUrl)
@HeamCMS.ImageAjax(true)
export default class extends DecoratableMangaScraper {

    public constructor() {
        super('templescan', 'TempleScan', 'https://templescan.net', Tags.Media.Manga, Tags.Media.Manhwa, Tags.Media.Manhua, Tags.Language.English, Tags.Source.Scanlator);
    }

    public override get Icon() {
        return icon;
    }
}