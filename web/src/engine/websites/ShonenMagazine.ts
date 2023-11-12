import { Tags } from '../Tags';
import icon from './ShonenMagazine.webp';
import { DecoratableMangaScraper, type MangaPlugin, type Manga } from '../providers/MangaPlugin';
import * as CoreView from './decorators/CoreView';
import * as Common from './decorators/Common';

@Common.MangaCSS(/^{origin}\/episode\/\d+$/, CoreView.queryMangaTitleFromURI)
@CoreView.ChaptersSinglePageCSS(CoreView.queryChapters)
@CoreView.PagesSinglePageJSON()
@CoreView.ImageAjax()
export default class extends DecoratableMangaScraper {

    public constructor() {
        //Shonenmagazine.com && pocket.shonenmagazine.com mangas url starts with https://pocket.shonenmagazine.com so this plugin handles both.
        super('shonenmagazine', `週刊少年マガジ (Weekly Shonen Magazine & Pocket Magazine)`, 'https://pocket.shonenmagazine.com', Tags.Language.Japanese, Tags.Source.Official, Tags.Media.Manga);
    }
    public override get Icon() {
        return icon;
    }

    public override async FetchMangas(provider: MangaPlugin): Promise<Manga[]> {

        //fetch from pocket.shonenmagazine.com
        const mangas1 = await CoreView.FetchMangasMultiPageCSS.call(this, provider, ['/series'], 'div.series-items ul.daily-series > li.daily-series-item > a');
        let mangas2 = [];
        try {
            //fetch from shonenmagazine.com
            this.URI.href = 'https://shonenmagazine.com';
            mangas2 = await CoreView.FetchMangasMultiPageCSS.call(this, provider, ['/series/smaga', '/series/bmaga', '/series/others'], 'article.serial-series-contents ul.serial-series-list > li.serial-series-item > a');
        } catch (error) {
            //
        }
        this.URI.href = 'https://pocket.shonenmagazine.com';
        return [...mangas1, ...mangas2];
    }
}