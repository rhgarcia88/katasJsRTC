const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(param) {
  
  let result = param.filter((item,index)=>{
    return param.indexOf(item) === index;
  })
return result;
}

console.log(removeDuplicates(duplicates));