// Usa un for para remplazar todas las comidas que no sean veganas con las frutas del array de frutas. Recuerda no usar frutas duplicadas. Finalmente, imprime el array resultante.


const fruits = ["Strawberry", "Banana", "Orange", "Apple"];
const foodSchedule = [
  { name: "Heura", isVegan: true },
  { name: "Salmon", isVegan: false },
  { name: "Tofu", isVegan: true },
  { name: "Burger", isVegan: false },
  { name: "Rice", isVegan: true },
  { name: "Pasta", isVegan: true },
];

function makeItVegan(schedule, fruitList){
let index=0;

  for(let i=0; i<schedule.length; i++){
    if(!schedule[i].isVegan){
      schedule[i].name = fruitList[index];
      schedule[i].isVegan = true;
      index++;
  }
}
console.log(schedule);
}

makeItVegan(foodSchedule,fruits);