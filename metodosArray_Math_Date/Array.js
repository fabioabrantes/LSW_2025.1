const numeros = [10, 20, 30];

function multiplicar100(numero, indice, array) {
  array.push(numero * 100);
}
numeros.forEach(multiplicar100);
let total = 0;

numeros.forEach((numero, indice, array) => {
  total = numero + 10 + indice;
});
const resultado = numeros.map((numero, indice, array) => {
  total = numero + 10 + indice;
  return total;
});
console.log(numeros);
console.log(resultado);


const produtos = [
  {name:"camisa", preco:50.1},
  {name:"short", preco:100.1},
  {name:"meia", preco:15.00}, 
]
function verificarProduto(elemento){
  return elemento.preco>50;
}

const result = produtos.filter(verificarProduto)
console.log(result);

const resultado2 = produtos.find((elemento)=>{
  return elemento.name === "camisa"
});

const resultado3 = produtos.includes((elemento)=>{
  return elemento.name === "camisa"
});

console.log(resultado3);