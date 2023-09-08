function getAngkaTerbesarKedua(personName) {
    let dataAngka = Array.from(new Set(personName));
    // Set untuk menghapus data/angka yang berulang kali (jadi yang ditampilkannya hanya satu kali)

    dataAngka.sort((x, y) => y - x);
    // sort adalah untuk mensortir angka dari yang terkecil ke terbesar atau sebaliknya
    // tergantung hasil operasi dari x dan y 
    // sort((x, y)) bisa di katakan bahwa x bernilai lebih besar dari y
    // jadi jika ingin mengurutkan dari yang terkecil ke yang terbesar bisa menggunakan x - y
    // jika ingin mengurutkan dari yang terbesar ke yang tekecil bisa menggunakan y - x
    // untuk x, y bisa menggunakan huruf atau kata lain
    // console.log("ini adalah angka yang sudah diurutkan", dataAngka)
    
    if (dataAngka.length >= 2 ) {
        return dataAngka[1];
        //[1] ini untuk mengeluarkan angka dengan urutan ke berapa. kenapa 1? karena untuk angka pertama itu termasuk urutan ke 0
    }
}

const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8]

console.log(getAngkaTerbesarKedua(dataAngka))

//console.log(getAngakaTerbesarKedua(0))

// console.log(getAngkaTerbesarKedua())