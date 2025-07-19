const btnAzul = document.getElementById("btnAzul");
const btnAmarelo = document.getElementById("btnAmarelo");
const btnRemoverAzul = document.getElementById("btnRemoverAzul");
// Função separada para podermos remover depois
function mudarParaAzul() {
  document.body.style.backgroundColor = "blue";
}

btnAzul.addEventListener("click", mudarParaAzul);

btnAmarelo.addEventListener("click", function (e) {
  e.target.style.backgroundColor = "black";
  e.target.style.color = "white";
  document.body.style.backgroundColor = "yellow";
});

// Remover o evento de mudar para azul
btnRemoverAzul.addEventListener("click", function (e) {
  console.log(e.target);
  btnAzul.removeEventListener("click", mudarParaAzul);
  alert("Evento de mudar para azul removido!");
}); /* 
btnRemoverAzul.addEventListener("blur", function () {
  btnAzul.removeEventListener("click", mudarParaAzul);
  alert("Evento de mudar para azul removido!");
}); */

document.getElementById("meuform").addEventListener("submit", function (e) {
  console.log(e.target);
  console.log(e.currentTarget);

  alert("Formulário enviado!");
});
