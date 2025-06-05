const produtos = [
  { nome: 'Camisa Polo', preco: 59.9, categoria: 'Roupas' },
  { nome: 'Smartphone', preco: 1999.99, categoria: 'Eletrônicos' },
  { nome: 'Tênis de Corrida', preco: 249.9, categoria: 'Calçados' },
  { nome: 'Fone de Ouvido', preco: 99.9, categoria: 'Eletrônicos' },
  { nome: 'Meias', preco: 15.0, categoria: 'Roupas' },
  { nome: 'Notebook', preco: 3999.99, categoria: 'Eletrônicos' },
];

// 1. Produtos da categoria "Eletrônicos"
const eletronicos = produtos.filter(p => p.categoria === 'Eletrônicos').map(p=>{
  return {
    nome: p.nome.toUpperCase(),
    preco:p.preco,
    categoria:p.categoria
  }
});

/* const eletronicos = produtos.filter(p => p.categoria === 'Eletrônicos').map(p=>{
  return {
  ...p,
    nome: p.nome.toUpperCase(),
});
 */
console.log('Eletrônicos:', eletronicos);