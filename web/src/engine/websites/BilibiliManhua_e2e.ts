﻿import { describe } from 'vitest';
import { TestFixture } from '../../../test/WebsitesFixture';

const config = {
    plugin: {
        id: 'bilibilimanhua',
        title: '哔哩哔哩 漫画 (Bilibili Manhua)'
    },
    container: {
        url: 'https://manga.bilibili.com/detail/mc27414',
        id: '27414',
        title: '猫之茗'
    },
    child: {
        id: '378510',
        title: '01 - 猫娘茉莉的糟糕穿越'
    },
    entry: {
        index: 1,
        size: 151_321,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, async () => (await fixture.Connect()).AssertWebsite());