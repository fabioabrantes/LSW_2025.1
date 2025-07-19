const campoTexto = document.getElementById("campoTexto");
const campoTexto2 = document.getElementById("campoTexto2");

const saida = document.getElementById("saida");
const saida2 = document.getElementById("saida2");

let texto ='';
// Usando propriedade .oninput
campoTexto.oninput = function (e) {
  texto=  `<h1>${campoTexto.value}</h1>`;
  saida.innerHTML = texto;
};

campoTexto2.oninput = function () {
  saida.innerHTML = ` ${texto} <h1>e sua idade: ${campoTexto2.value}</h1>`;
};
