const produtos = [
  "Camisa",
  "Calça",
  "Tênis",
  "Jaqueta",
  "Meia",
  "Boné",
  "Relógio",
  "Cinto",
  "Óculos",
  "Carteira",
];

function paginarProdutos(lista, pagina, porPagina = 5) {
  const inicio = (pagina - 1) * porPagina;
  const fim = pagina * porPagina;
  return lista.slice(inicio, fim);
}

console.log(paginarProdutos(produtos, 1));
// ["Camisa", "Calça", "Tênis", "Jaqueta", "Meia"]

console.log(paginarProdutos(produtos, 2));
// ["Boné", "Relógio", "Cinto", "Óculos", "Carteira"]

/* 
 Explicação:
pagina - 1 serve pra calcular o índice inicial da página.

fim pega o último item não incluso da fatia.

.slice(inicio, fim) fatiará a lista de acordo com a página atual.


*/