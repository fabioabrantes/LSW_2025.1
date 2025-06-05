const carrinho = ["Camisa Polo    ", "   Tênis Adidas", "Fone de Ouvido", "Meias"];

function verificarProdutoNoCarrinho(nomeProduto) {
  const produtoFormatado = nomeProduto.trim().toLowerCase();

  const indice = carrinho.indexOf(
    (item) => item.trim().toLowerCase() === produtoFormatado
  );
console.log(indice)
  if (indice !== -1) {
    console.log(`Produto encontrado na posição ${indice}.`);
  } else {
    console.log("Produto não está no carrinho.");
  }
}
verificarProdutoNoCarrinho("Fone de Ouvido");