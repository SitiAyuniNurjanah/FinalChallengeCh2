const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy 8",
    hargaSatuan: 760000,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },

  {
    namaProduct: "Sepatu Warior Tristan Black Brown High - Original",
    hargaSatuan: 960000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 37,
  },

  {
    namaProduct: "Sepatu Warior Tristan Marron High - Original",
    hargaSatuan: 360000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },

  {
    namaProduct: "Sepatu Warior Rainbow Tosca Corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 90,
  },
];

function hitungTotalPenjualan(dataPenjualan) {

  const terjual = dataPenjualan.map(product => product.totalTerjual);
  // menggunakan map itu untuk mengambil nilai/jumlah yang ada pada totalTerjual pada setiap objek

  const jumlahTerjual = terjual.reduce((total, totalTerjual) => total + totalTerjual, 0);
  // disini menggunakan reduce untuk menjumlahkan nilai yang ada pada beberapa objek di satu array menjadi satu nilai

  return jumlahTerjual;
}

const jumlahTerjual = hitungTotalPenjualan(dataPenjualanPakAldi);

console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
