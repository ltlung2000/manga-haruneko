import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'nhentai',
        title: 'NHentai'
    },
    container: {
        url: 'https://nhentai.net/g/514707/',
        id: '/g/514707/',
        title: '(C94) [PowderSkin (うらはるこん)] IchimotsuがあるinHose'
    },
    child: {
        id: '/g/514707/',
        title: '(C94) [PowderSkin (うらはるこん)] IchimotsuがあるinHose'
    },
    entry: {
        index: 1,
        size: 152_501,
        type: 'image/jpeg'
    }
};

new TestFixture(config).AssertWebsite();