// Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];
function repeatCounter(param) {
  let wordCount = {};
  for(let i = 0; i < param.length; i++) {
    let word = param[i];
    if(wordCount[word] === undefined) {
      wordCount[word] = 1;
    } else {
      wordCount[word]++;
    }
  }
  return wordCount;
}

console.log(repeatCounter(counterWords));