import { Tags } from '../Tags';
import icon from './BookLive.webp';
import { DecoratableMangaScraper } from '../providers/MangaPlugin';
import * as Common from './decorators/Common';
import * as SpeedBinb from './decorators/SpeedBinb';
function ChapterExtractor(anchor: HTMLAnchorElement) {
    const id = '/bviewer/s/?cid=' + anchor.dataset.title + '_' + anchor.dataset.vol;
    const title = anchor.closest('.series_list_detail').querySelector<HTMLAnchorElement>('a[class*=sl-title]').text.trim();
    return { id, title };
}

@Common.MangaCSS(/^{origin}\/product\/index\/title_id\/\d+\/vol_no\/\d+$/, 'li.contents span.book_title')
@Common.MangasNotSupported()
@Common.ChaptersSinglePageCSS('div#slide_up_top li.item div.buttons a.bl-bviewer[data-title][data-vol]', ChapterExtractor)
@SpeedBinb.PagesSinglePageAjaxv016130()
@SpeedBinb.ImageAjax()

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('booklive', `BookLive`, 'https://booklive.jp', Tags.Language.Japanese, Tags.Media.Manga, Tags.Source.Official);
    }

    public override get Icon() {
        return icon;
    }
}