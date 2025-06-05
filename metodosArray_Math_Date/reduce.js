//O objetivo é agrupar os nomes dos produtos por categoria.
const produtos = [
  { nome: "Camisa", categoria: "Roupas" },
  { nome: "Calça", categoria: "Roupas" },
  { nome: "Notebook", categoria: "Eletrônicos" }
];

const agrupados = produtos.reduce((acc, item) => {
  if (!acc[item.categoria]) {
    acc[item.categoria] = [];
  }
  acc[item.categoria].push(item.nome);
  return acc;
}, {});

console.log(agrupados);

/*
{
  Roupas: ["Camisa", "Calça"],
  Eletrônicos: ["Notebook"]
}
*/