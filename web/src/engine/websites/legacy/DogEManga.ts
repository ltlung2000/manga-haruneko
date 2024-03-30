// Auto-Generated export from HakuNeko Legacy
// See: https://gist.github.com/ronny1982/0c8d5d4f0bd9c1f1b21dbf9a2ffbfec9

import { Tags } from '../../Tags';
import icon from './DogEManga.webp';
import { DecoratableMangaScraper } from '../../providers/MangaPlugin';
import * as Common from '../decorators/Common';
import * as SinMH from '../decorators/SinMH';


// export const queryManga = 'div.book-cont div.book-detail div.book-title h1';
// export const queryMangas = 'ul#contList li p.ell a';
export const queryChapters = 'div.show div div a';
// export const queryChapters = 'div.comic-chapters ul li a';
export const queryChaptersScript = `
    new Promise(resolve => {
        let button = document.querySelector('#checkAdult');
        if (button) {
            button.click();
        }
        let chapterList = [...document.querySelectorAll('{queryChapters}')].map(element => {
            return {
                id: new URL(element.href, window.location).pathname,
                title: element.text.trim().replace(/\\d+p$/, ''),
                language: ''
            };
        });
        resolve(chapterList);
    });
`;


export const queryPagesScript = `
new Promise(resolve => {
    let pageList = [];
    try {
        let elems = document.querySelectorAll('div img.site-reader__image');
        for(let index = 0; index < elems.length; index++){
            let data = elems[index].getAttribute('data-page-image-url');
            let img_url = [];
            img_url.push(data);
            pageList.push(img_url);
        }
    } catch(error) {
        //reject(error);
    }
    resolve(pageList);
});
`;

@Common.MangaCSS(/^{origin}\/m\/[^/]+$/, "div h3")
@Common.MangasMultiPageCSS(SinMH.path, SinMH.queryMangas)
@SinMH.ChaptersSinglePageJS(queryChaptersScript, queryChapters)
@SinMH.PagesSinglePageJS(queryPagesScript, queryChapters)
@Common.ImageAjax()

export default class extends DecoratableMangaScraper {

    public constructor() {
        super('dogemanga', `漫画狗 (dogemanga)`, 'https://dogemanga.com', Tags.Language.Chinese, Tags.Media.Manga, Tags.Media.Manhua, Tags.Media.Manhwa, Tags.Source.Aggregator);
    }

    public override get Icon() {
        return icon;
    }
}

// Original Source
/*
import ParentClass from './ComicAcgn.mjs';

export default class DogEManga extends ParentClass {

    constructor() {
        super();
        super.id = 'dogemanga';
        super.label = '漫画狗';
        this.tags = [ 'manga', 'chinese' ];
        this.url = 'https://dogemanga.com';

        this.path = '';
        this.queryMangas = 'h4 a.site-red-dot-box';

        // this.queryMangaTitle = 'div h2';
        // this.queryChapters = 'div#site-manga-all div div div div a';
        this.queryMangaTitle = 'div h3';
        this.queryChapters = 'div.show div div a';
        this.queryPagesSuffix = '#top-to-bottom';
        this.queryPagesScript = `
            new Promise((resolve, reject) => {
                setTimeout(() => {
                    let pageList = [];
                    try {
                        let run = true;
                        // let elems = document.querySelectorAll('div#site-page-slides-box div img');

                        // for(let dmpage = 0, run = true; run; dmpage++){
                        //     let data;
                        //     if(dmpage == 0)
                        //     {
                        //         data = elems[0].getAttribute('src');
                        //     }
                        //     else
                        //     {
                        //         data = elems[dmpage].getAttribute('data-src');
                        //     }
                        //     let img_url = [];
                        //     data.length ? img_url.push(data) : run = false;
                        //     data.length ? pageList.push(img_url) : run = false; 
                        // }

                        let elems = document.querySelectorAll('div img.site-reader__image');

                        for(let dmpage = 0; dmpage < elems.length; dmpage++){
                            let data = elems[dmpage].getAttribute('data-page-image-url');
                            let img_url = [];
                            img_url.push(data);
                            pageList.push(img_url);
                        }
                    } catch(error) {
                        //reject(error);
                    }
                    resolve(pageList);
                }, 1000);
            });
        `;
    }

    async _getMangas() {
        let mangaList = [];
        let run = true;
        let mangas = await this._getMangasFromPage();
        mangas.length ? mangaList.push(...mangas) : run = false;
        return mangaList;
    }

    async _getMangasFromPage() {
        const uri = new URL(this.path, this.url);
        const request = new Request(uri, this.requestOptions);
        const data = await this.fetchDOM(request, this.queryMangas);
        return data.map(element => {
            return {
                id: this.getRootRelativeOrAbsoluteLink(element, this.url),
                title: element.text.trim()
            };
        });
    }
}
*/
