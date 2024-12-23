﻿import { TestFixture, type Config } from '../../../test/WebsitesFixture';

const config: Config = {
    plugin: {
        id: 'kiryuu',
        title: 'Kiryuu'
    },
    container: {
        url: 'https://kiryuu.one/manga/the-modern-eras-strongest-soldier-conquers-another-worlds-dungeon/',
        id: '/manga/the-modern-eras-strongest-soldier-conquers-another-worlds-dungeon/',
        title: 'The Modern Era’s Strongest Soldier Conquers Another World’s Dungeon'
    },
    child: {
        id: '/the-modern-eras-strongest-soldier-conquers-another-worlds-dungeon-chapter-01/',
        title: 'Chapter 01 Fix'
    },
    entry: {
        index: 0,
        size: 705_846,
        type: 'image/png'
    }
};

new TestFixture(config).AssertWebsite();