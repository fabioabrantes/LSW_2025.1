/* let str = "fabio é professor LSW";
const str2= str.replace("fabio","diogo")
const indice = str.indexOf('O')
console.log(indice) */

const frase1 = "Nome: João Silva | Idade: 25 | Email: joao.silva@email.com";
//const temEmail = frase.includes("Email")
/* const indiceInicial = frase.indexOf(":");
const indiceFinal = frase.indexOf("|");
const nome = frase.slice(indiceInicial +1,indiceFinal);
console.log(nome.trim())
const indiceInicialidade = frase.indexOf(":",indiceFinal);
const indiceFinalidade = frase.indexOf("|",indiceInicialidade);
const idade = frase.slice(indiceInicialidade +1,indiceFinalidade);
console.log(idade.trim())
const indiceIniciaEmail = frase.indexOf(":",indiceFinalidade);
const indiceFinalEmail = frase.indexOf("|",indiceIniciaEmail);
const email = frase.slice(indiceIniciaEmail + 1);
console.log(email.trim()) */

const frase = "Nome: João Silva | Idade: 25 | Email: joao.silva@email.com";
const arrayResult = frase.split("|");
console.log(arrayResult.length)
for (let index = 0; index < arrayResult.length; index++) {
  const valor = arrayResult[index];
  const resultado = valor.split(":")
  console.log(resultado[1])
}