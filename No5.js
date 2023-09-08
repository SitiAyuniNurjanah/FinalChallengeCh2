const dataPenjualanNovel = [
    {
        idProduct : 'BOOK002421',
        namaProduct : 'Pulang - Pergi' ,
        penulis : 'Tere Liye' , 
        hargaBeli : 60000,
        hargaJual : 86000,
        totalTerjual : 150,
        sisaStok : 17,
    },

    {
        idProduct : 'BOOK002351',
        namaProduct : 'Selamat Tinggal' ,
        penulis : 'Tere Liye' , 
        hargaBeli : 75000,
        hargaJual : 103000,
        totalTerjual : 171,
        sisaStok : 20,
    },

    {
        idProduct : 'BOOK002941',
        namaProduct : 'Garis Waktu' ,
        penulis : 'Fiersa Besari' , 
        hargaBeli : 67000,
        hargaJual : 99000,
        totalTerjual : 213,
        sisaStok : 5,
    },

    {
        idProduct : 'BOOK002941',
        namaProduct : 'Laskar Pelangi' ,
        penulis : 'Andrea Hirata' , 
        hargaBeli : 55000,
        hargaJual : 68000,
        totalTerjual : 20,
        sisaStok : 56,
    },
];

function getInfoPenjualan(dataPenjualan) {
    if (!Array.isArray(dataPenjualan)) {
        let totalModal = 0;
        let totalKeuntungan = 0;

    }
}

console.log(getInfoPenjualan(dataPenjualanNovel));