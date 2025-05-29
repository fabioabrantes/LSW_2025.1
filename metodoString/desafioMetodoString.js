const form = document.getElementById("form-cadastro");

form.addEventListener("submit", function (eveent) {
  event.preventDefault();

  const fieldNome = String(document.getElementById("nome").value);
  const fieldEmail = String(document.getElementById("email").value);
  const fieldIdade = document.getElementById("idade").value;
  const fieldInteresses = String(document.getElementById("interesses").value);
  
  let arrayNome = fieldNome.trim().split(' ');
  console.log(arrayNome);
  // aqui esta dando primeira letra maiuscual
  for (let index = 0; index < arrayNome.length; index++) {
    arrayNome[index] =
      arrayNome[index][0].toUpperCase() +
      arrayNome[index].slice(1).toLowerCase();
  }

  const nomeFormated = arrayNome.join(" ");

  const emailFormattedSemEspaco = fieldEmail.trim();
  const emailFormattedTotalmente = emailFormattedSemEspaco.toLocaleLowerCase();

  const idadeFormatted = parseInt(fieldIdade.trim());

  const interessesFormatted = fieldInteresses.trim().split(",");
  for (let index = 0; index < interessesFormatted.length; index++) {
    interessesFormatted[index] = interessesFormatted[index].trim();
  }

  const user = {
    nome: nomeFormated,
    email: emailFormattedTotalmente,
    idade: idadeFormatted,
    interesses: interessesFormatted,
  };

  console.log(user);
});
