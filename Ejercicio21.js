// Usa un bucle y dos condiciones para imprimir por consola el nombre de los usuarios que sean menor de edad precedidos del texto
// "Usuarios menores de edad:" y otro que imprima a los usuarios mayores de edad, precedido del texto "Usuarios mayores de edad:".

const users = [
  { name: "Tony", years: 43 },
  { name: "Peter", years: 18 },
  { name: "Natasha", years: 14 },
  { name: "Bruce", years: 32 },
  { name: "Khamala", years: 16 },
];

function getUsersbyFilter(param){
  let lessEighteen = [];
  let moreThanEighteen = [];
for (const iterator of param) {
  if(iterator.years>=18){
    moreThanEighteen.push(iterator.name);
  }else if(iterator.years<18){
    lessEighteen.push(iterator.name);
  }
}

console.log(`Usuarios menores de edad: ${lessEighteen.join(', ')} 
Usuarios mayores de edad ${moreThanEighteen.join(', ')}`);
}
getUsersbyFilter(users);