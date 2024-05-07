import { describe } from 'vitest';
import { TestFixture, type Config } from '../../../test/WebsitesFixture';

const config: Config = {
    plugin: {
        id: 'futabanet',
        title: 'がうがうモンスター (Futabanet Monster)'
    },
    container: {
        url: 'https://gaugau.futabanet.jp/list/work/62591706776561c83f010000',
        id: '/list/work/62591706776561c83f010000',
        title: 'ポイントギフター《経験値分配能力者》の異世界最強ソロライフ～ブラックギルドから解放された男は万能最強職として無双する～'
    },
    child: {
        id: '/list/work/62591706776561c83f010000/episodes/1',
        title: '第1話(1)'
    },
    entry: {
        index: 0,
        size: 1_869_624,
        type: 'image/png'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());