function listUser(id, users, callback) {
  if (id === undefined) {
    callback("usuario não existe");
    return callback(users);
  }
  for (let index = 0; index < users.length; index++) {
    const element = users[index];
    console.log(element);
  }
}
function writerMessage(value) {
  console.log(value);
  return "fim";
}
let namesUsers = ["fabio", "jose", 5];
const resultado = listUser(undefined, namesUsers, writerMessage);
console.log(resultado);

let frase = "jose é anonimo"
function registerUser(user, idade) {
  let frase = "ola usuario ";

  function writerMessage2(value) {
    console.log(value);
  }

  if (!user) {
    writerMessage2("error usuario não existe");
  } else if (user && idade > 18) {
    frase = frase + user;
    writerMessage2(frase);
  }
  frase = frase + user;
  writerMessage2(frase);
}
registerUser("fabio", 16);

// funções aninhadas - retornando a função interna
function externa() {
  let nome= "fabio"
  function interna() {
    console.log("Função interna executada",nome);
  }

  return interna; // retorna a referência da função
}
const chamar = externa(); 
chamar(); 

// Tornando a função interna acessível via objeto
function externa2() {
  function interna() {
    console.log("Interna acessada via objeto");
  }

  return {
    chamarInterna: interna
  };
}
const obj = externa2();
obj.chamarInterna();

function contador(){
  let numero = 0;

  function incrementar(){
    numero = numero + 1;
    return numero;
  }

  return incrementar;
}
const meuIncrementador = contador();
console.log(meuIncrementador());
console.log(meuIncrementador());
console.log(meuIncrementador());
console.log(meuIncrementador());


function showUsers(users="default"){

  return console.log(users);
}
showUsers()
showUsers(["fabio","jose"]);
