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
