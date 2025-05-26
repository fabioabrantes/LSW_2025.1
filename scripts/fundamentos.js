let num1 = 10.1111111;
let nome = "fabio";
let imprimirTela = `    iofsvdfkjvd
fkjvndf ${nome},     `;

imprimirTela.console.log(imprimirTela.toUpperCase().trim());

console.log(imprimirTela);

let num2 = "a2";
let resultado = num1 * num2;

console.log(nome.toUpperCase());

function buscarUsuario(cpf) {
  let user = "fabio";
  if (cpf === 1234567) {
    return user;
  } else {
    return null;
  }
}
console.log(buscarUsuario("1234"));
let x = false + 1;
console.log(x);

let operando1 = 10;
let operando2 = 3;
operando1 = operando1 % operando2;

console.log(operando1);

let a = 1;
let b = 1;
let result = a++ * ++b;
console.log(result, a, b);

result = ++a - b++;
console.log(result, a, b);

let numero = 10;
let nome2 = "jose";
let result2 = true && "fabip";

console.log(result2);

const array = [10, 20, 30, 40];
const array2 = [...array];
array2.push(70);
const array3 = array;
array3.push(50);

console.log("array", array);
console.log("array2", array2);

let sobrenome = "";
if (sobrenome) {
  console.log("true");
} else {
  console.log("false");
}

let i = 0;
while (i < 6) {
  if (i == 3) {
    break;
  }
  i = i + 1;
}
console.log(i * 2);

function exemeploComTudo() {
  for (let i = 0; i < 5; i++) {
    if (i === 1) continue;
    if (i === 2) break;
    if (i === 4) return;
    console.log("valor", i);
  }
  console.log("Fim da função");
}
exemeploComTudo() ;

if (true) {
  var res = 10;
  let b = 20;
}
console.log(res); // ✅ 10 (escopo de função)

var nome22 = "Ana";
var nome22 = "Lucas"; // OK
var nome22 = "ddd"; // OK