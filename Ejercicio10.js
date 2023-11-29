const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
  let total = 0;
  for (const number of param) {
    total += number;
  }
  return total/param.length;
}
console.log(average(numbers));