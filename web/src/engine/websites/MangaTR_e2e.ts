import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'mangatr',
        title: 'Manga-TR'
    },
    container: {
        url: 'https://manga-tr.com/manga-mairimashita-iruma-kun.html',
        id: '/manga-mairimashita-iruma-kun.html',
        title: 'Mairimashita! Iruma-kun'
    },
    child: {
        id: '/id-153837-read-mairimashita-iruma-kun-chapter-174.html',
        title: '174'
    },
    entry: {
        index: 1,
        size: 342_746,
        type: 'image/webp'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());