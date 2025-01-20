import test from 'node:test';
import assert from 'node:assert';
// menambahkan file 
import sum from './index.js';

test('pengujian dua nilai a dan b', async (T) => {
    await T.test('menambahkan kedua nilai jika angka positif', () => {
        assert.strictEqual(sum(1, 1), 2, 'penjumlahan 1 + 1 = 2');
    });

    // Test case untuk input
    await T.test('fungis akan mengembalikan 0 jika kedua nilai bukan number', () => {
        assert.strictEqual(sum('2', 3), 0 ,'input string pertama harus menghasilkan 0')
        assert.strictEqual(sum(2, '3'), 0 ,'input string kedua harus menghasilkan 0')
        assert.strictEqual(sum('a', 'b'), 0 ,'input kedua string harus menghasilkan 0')
    });

    // Test case untuk angka negatif
  await T.test('should return 0 for negative numbers', () => {
    assert.strictEqual(sum(-1, 5), 0, 'Input negatif pertama harus menghasilkan 0');
    assert.strictEqual(sum(5, -1), 0, 'Input negatif kedua harus menghasilkan 0');
    assert.strictEqual(sum(-1, -5), 0, 'Kedua input negatif harus menghasilkan 0');
  });

  // Test case untuk angka nol
  await T.test('should handle zero correctly', () => {
    assert.strictEqual(sum(0, 5), 5, 'Penjumlahan 0 + 5 harus menghasilkan 5');
    assert.strictEqual(sum(5, 0), 5, 'Penjumlahan 5 + 0 harus menghasilkan 5');
    assert.strictEqual(sum(0, 0), 0, 'Penjumlahan 0 + 0 harus menghasilkan 0');
  });
});     