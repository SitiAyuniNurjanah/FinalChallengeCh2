function changedWord(selectedText, changedText, text) {
  const kalimatbaru = text.replace(selectedText, changedText);
  //replace digunakan untuk mengganti teks yang ada pada sebuah string dengan kata/kalimat yang lain.
  
  return kalimatbaru;
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya'
const kalimat2 = 'Gunung bromo tak akan mampu menggambarkan besarnya cintaku padamu'

console.log(changedWord('mencintai', 'membenci', kalimat1));

console.log(changedWord('bromo', 'semeru', kalimat2));