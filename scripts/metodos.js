// gera numero aleatórios entre min e < que max
function gerarNumeroAleatorio() {
  let min = parseInt(document.getElementById("min").value);
  let max = parseInt(document.getElementById("max").value);

  let resultado = Math.floor(Math.random() * (max - min)) + min;

  document.getElementById("resultado").textContent = resultado;
  return resultado;
}
