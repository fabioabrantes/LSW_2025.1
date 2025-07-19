const container = document.getElementById("container");
const todosParagrafos = document.getElementsByTagName("p");
const elementosDestaque = document.getElementsByClassName("destaque");

function atualizarContagem() {
  document.getElementById("contagemP").textContent = todosParagrafos.length;
  document.getElementById("contagemClasse").textContent =
    elementosDestaque.length;
}
// Atualiza a contagem logo ao carregar a página
atualizarContagem();

function adicionarAutomaticamente() {
  const novo = document.createElement("p");
  novo.className = "destaque";
  novo.textContent = "Parágrafo add automático!";
  container.appendChild(novo);
  atualizarContagem();
}

// Adiciona um parágrafo a cada 2 segundos
setInterval(adicionarAutomaticamente, 2000);

