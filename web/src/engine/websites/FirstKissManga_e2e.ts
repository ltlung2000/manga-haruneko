import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'firstkiss',
        title: 'LikeManga'
    },
    container: {
        url: 'https://likemanga.io/my-eternal-reign-4250/',
        id: '/my-eternal-reign-4250/',
        title: 'My Eternal Reign'
    },
    child: {
        id: '/my-eternal-reign-4250/chapter-9-314555/',
        title: 'Chapter 9'
    },
    entry: {
        index: 0,
        size: 126_0603,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, () => fixture.AssertWebsite());
