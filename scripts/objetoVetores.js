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

let pessoa = "fabio";

let userDEscription = {
  nome:'fabio',
  idade:13,
  falar(value){
    let num = 0;
    return num +1;
  },
  endereco:{
    rua:"jose alvires",
    numero:45,
    cidade:'sao jose do egito'
  }
}

const nomesPropriedadedoObjeto = Object.keys(userDEscription.endereco);
console.log(nomesPropriedadedoObjeto)
for (let prorpiedade in userDEscription) {
  console.log(prorpiedade);
  console.log(typeof prorpiedade)
  console.log(userDEscription[prorpiedade]);
}

userDEscription.endereco.cidade = "São José do Egito";
console.log(userDEscription.endereco.cidade);
userDEscription.endereco.cep ="58915000";
delete userDEscription.falar
console.log(userDEscription)
function UserDEscription2(){
  this.nome ="fabio";
  this.idade =13;
  falar = (value)=>{
    let num = 0;
    return num +1;
  }
}

let objetoUser = new UserDEscription2();
class UserDEscription3{
  nome = "fabio"
}
const objet3User = new UserDEscription3();
objet3User.nome

console.log(userDEscription.idade);
console.log(userDEscription['idade'])
const objetoJson = JSON.stringify(userDEscription);
console.log(objetoJson);
const transformadoJavascript = JSON.parse(objetoJson);
console.log(transformadoJavascript);

function somar(value1, value2){
  let resultado = value1 + value2;

  return function imprimirREsutado(){
    console.log(resultado)
  }
 
}
const imprimir = somar(3,4);
imprimir();

const imprimirEnsinar = function(){
    console.log("ensinar programação javascript")
  }
let userX  = {
  nome:"fabio",
  profissao:"professor",
  ensinar: imprimirEnsinar
}
userX.ensinar();
let numero = 10.890909;
let numero2 = Math.
