﻿import { TestFixture, type Config } from '../../../test/WebsitesFixture';

const config: Config = {
    plugin: {
        id: 'modescanlator',
        title: 'Mode Scanlator'
    },
    container: {
        url: 'https://modescanlator.com/series/uma-lenda-do-vento',
        id: JSON.stringify({ id: '36', slug: 'uma-lenda-do-vento' }),
        title: 'Uma Lenda do Vento',
    },
    child: {
        id: JSON.stringify({ id: '2420', slug: 'capitulo-126' }),
        title: 'Capítulo 126',
    },
    entry: {
        index: 0,
        size: 1_222_675,
        type: 'image/jpeg'
    }
};

const fixture = new TestFixture(config);
describe(fixture.Name, () => fixture.AssertWebsite());