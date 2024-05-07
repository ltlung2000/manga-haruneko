import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'taadd',
        title: 'TAADD'
    },
    container: {
        url: 'https://www.taadd.com/book/One+Piece.html',
        id: '/book/One+Piece.html',
        title: 'One Piece',
    },
    child: {
        id: '/chapter/OnePieceChapter1086/8624347/',
        title: 'Chapter 1086',
    },
    entry: {
        index: 0,
        size: 914_447,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());