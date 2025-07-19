const caixa = document.getElementById("caixa");

function adicionarClasse() {
  caixa.classList.add("grande");
  console.log("Classe 'grande' adicionada!");
}

function removerClasse() {
  caixa.classList.remove("vermelha");
  console.log("Classe 'vermelha' removida!");
}

function alternarClasse() {
  caixa.classList.toggle("borda");
  console.log("Classe 'borda' alternada!");
}

function verificarClasse() {
  if (caixa.classList.contains("vermelha")) {
    alert("A div TEM a classe 'vermelha'");
  } else {
    alert("A div NÃO tem a classe 'vermelha'");
  }
}
function mostrarClasses() {
  const total = caixa.classList.length;
  console.log(`A caixa tem ${total} classe(s):`);

  for (let i = 0; i < total; i++) {
    console.log(`Classe ${i}:`, caixa.classList[i]);
  }

  alert(`A caixa tem ${total} classe(s). Veja o console para detalhes.`);
}
