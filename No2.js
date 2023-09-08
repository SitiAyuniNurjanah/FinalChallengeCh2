function checkTypeNumber(givenNumber) {
    if (typeof givenNumber !== 'number' || isNaN(givenNumber)) {
        // || : atau
        // !== untuk membandingkan nilai yang ada pada givenNumber ini berupa 'number' atau bukan 
        // jika berupa number maka akan menghasilkan true
        // isNaN adalah is Not a Number berfungsi untuk memeriksa nilai aada pada givenNumber ini
        // berupa angka atau bukan
        return 'Error: invalide data type';
    }
    if (givenNumber % 2 === 0) {
        return 'GENAP';
    } else {
        return 'GANJIL';
    }
    // % termasuk operator untuk melakukan operasi matematika
        // % untuk menghitung hasil bagi 
        // givenNumber % 2 === 0 berarti 
        // apakah angka yang ada pada givenNumber ini hasil dibagi 2 nya menjadi 0 atau tidak
        // kalau itu hasil nya tidak 0 setelah habis di bagi 2 berarti itu termasuk angka/bilangan genap
        // kalau hasilnya tidak 0 setelah di bagi 2 maka angka/bilangan tersebut termasuk ganjil
}

console.log(checkTypeNumber(10))
console.log(checkTypeNumber(3))
console.log(checkTypeNumber("3"))
console.log(checkTypeNumber({}))
console.log(checkTypeNumber([]))
console.log(checkTypeNumber())

// line 25-28 error di karena bukan angka/number. dari kode di atas sudah jelas bahwa yang akan keluar itu jika
// berupa angka, selain angka maka akan error