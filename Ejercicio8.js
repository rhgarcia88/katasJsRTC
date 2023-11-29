// Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings 
//tenga la misma longitud deberá devolver el primero.
// Puedes usar este array para probar tu función:

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
  let longest=' ';
  for (const name of param) {
   if(name.length>longest.length){
    longest=name;
   }
  }
  return longest;
}

console.log(findLongestWord(avengers));