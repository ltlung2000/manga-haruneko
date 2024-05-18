import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'weloma',
        title: 'WeLoMa'
    },
    container: {
        url: 'https://weloma.art/429/',
        id: '/429/',
        title: 'SLIME TAOSHITE 300-NEN, SHIRANAI UCHI NI LEVEL MAX NI NATTEMASHITA'
    },
    child: {
        id: '/429/131864/',
        title: 'Chapter 73.1',
    },
    entry: {
        index: 0,
        size: 100_474,
        type: 'image/webp'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());