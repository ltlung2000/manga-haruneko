import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'nicomanga',
        title: 'NicoManga'
    },
    container: {
        url: 'https://nicomanga.com/manga-kage-no-jitsuryokusha-ni-naritakute-raw.html',
        id: '/manga-kage-no-jitsuryokusha-ni-naritakute-raw.html',
        title: 'TO BE A POWER IN THE SHADOWS! (MANGA)'
    },
    child: {
        id: '/read-kage-no-jitsuryokusha-ni-naritakute-raw-chapter-60.2.html',
        title: 'Chapter 60.2'
    },
    entry: {
        index: 0,
        size: 708_342,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());