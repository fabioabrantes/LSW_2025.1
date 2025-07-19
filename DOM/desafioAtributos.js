function executarDesafio() {
  const nomeInput = document.getElementById("nome");
  const checkbox = document.getElementById("aceita");
  const link = document.getElementById("meuLink");
  const caixa = document.getElementById("caixa");

  // 1. Mostrar no console o valor ORIGINAL do input (value no HTML)
  console.log("Value original:", nomeInput.__________("value"));

  // 2. Mostrar se o checkbox está MARCADO atualmente (DOM)
  console.log("Checkbox marcado?", checkbox.__________);

  // 3. Mudar dinamicamente o valor do input para "Carlos"
  nomeInput.__________ = "Carlos";

  // 4. Desmarcar o checkbox
  checkbox.__________ = __________;

  // 5. Ler o HREF original do link (HTML)
  console.log("HREF do HTML:", link.__________("href"));

  // 6. Alterar o href do link para "https://example.com"
  link.__________("href", "https://example.com");

  // 7. Adicionar uma classe "destacado" à div
  caixa.__________("class","card destacado");

  // 8. Alterar o texto da div para "Concluído com sucesso!"
  caixa.__________ = "Concluído com sucesso!";
}
