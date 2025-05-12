let cars = ["fusca","fitar uno","gol"];
cars[4]="tracker";
console.log(typeof cars)
cars.unshift("mustang")
cars.push("golf");
console.log(cars)
let lastElement = cars.pop();
console.log(cars)
console.log(lastElement)
cars.shift();
console.log(cars);

for (let index = 0; index < cars.length; index++) {
  let contador = 4;
  cars[contador - index] = cars[index]; 
}

console.log(cars);


let quadrado = [
  [0,1],
  [2,3]
]
console.log(quadrado[1][1]);

let nameUsers = ['fabio',"jose","joao","lucia","lais"]
nameUsers.pop();
nameUsers[nameUsers.length-1];
let newArray =[];
for (let index = 0; index < nameUsers.length; index++) {
  newArray.push(nameUsers[index].toUpperCase());
  
}
console.log(newArray);
