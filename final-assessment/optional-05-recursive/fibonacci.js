function fibonacci(n) {
  if (n === 0) {
    return [0]; // Basis kasus untuk n = 0
  } else if (n === 1) {
    return [0, 1]; // Basis kasus untuk n = 1
  } else {
    const fibSeries = fibonacci(n - 1); // Rekursi untuk mendapatkan deret sebelumnya
    fibSeries.push(
      fibSeries[fibSeries.length - 1] + fibSeries[fibSeries.length - 2]
    ); // Menambahkan suku berikutnya
    return fibSeries;
  }
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
