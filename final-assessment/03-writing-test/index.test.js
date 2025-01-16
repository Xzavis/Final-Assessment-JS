import { describe, test } from 'node:test';
import assert from 'node:assert';
import { sum } from './index.js';

describe('testing berjalan', () => {
    test('expetasi berhasil', () => {
        // Arrabge 
        const a = 2;
        const b = 3;

        // action
        const actualValue = sum(a, b);

        const expetasi = 5;
        assert.equal(actualValue, expetasi);
    });

    test('expetasi gagal a', () => {
        const expetasiErrorA = () => {
            const a = '2';
            const b = 3;

            add(a, b);
        };

        assert.throws(expetasiErrorA, Error);
    });

    test('expetasi gagal b', () => {
        const expetasiErrorB = () => {
            const a = 2;
            const b = '3';

            add(a, b);
        };

        assert.throws(expetasiErrorB, Error);
    });
});