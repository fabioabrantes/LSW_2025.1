function removerItem(carrinho, nomeProduto) {
  const index = carrinho.indexOf(nomeProduto);
  if (index !== -1) {
    carrinho.splice(index, 1); // remove 1 item no índice
  }
}

function substituirItem(carrinho, nomeAntigo, nomeNovo) {
  const index = carrinho.indexOf(nomeAntigo);
  if (index !== -1) {
    carrinho.splice(index, 1, nomeNovo); // remove 1 item e insere outro no lugar
  }
}

const carrinho = ["Camisa", "Calça", "Boné", "Meia"];
removerItem(carrinho, "Boné");
console.log(carrinho);
substituirItem(carrinho, "Meia", "Tênis");
console.log(carrinho);