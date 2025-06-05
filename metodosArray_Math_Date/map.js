const produtos = [
  { nome: 'camiseta', preco: 49.9 },
  { nome: 'calça', preco: 89.5 },
  { nome: 'tênis', preco: 149.99 },
  { nome: 'boné', preco: 29.9 }
];

// Usando map para transformar os dados
const produtosFormatados = produtos.map(produto => {
  return {
    nome: produto.nome.toUpperCase(),
    preco: produto.preco.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    })
  };
});

console.log(produtosFormatados);