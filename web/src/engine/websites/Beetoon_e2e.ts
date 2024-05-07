import { describe } from 'vitest';
import { TestFixture, type Config } from '../../../test/WebsitesFixture';

const config: Config = {
    plugin: {
        id: 'beetoon',
        title: 'Beetoon'
    },
    container: {
        url: 'https://ww7.beetoon.net/one-piece-02/',
        id: '/one-piece-02/',
        title: 'One Piece'
    },
    child: {
        id: '/one-piece-chapter-1096',
        title: 'Chapter  1096'
    },
    entry: {
        index: 0,
        size: 450_883,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());