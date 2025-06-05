document.getElementById("form").addEventListener("submit", function (evento) {
     evento.preventDefault();

  const input = document.getElementById("nascimento").value;
  console.log(input);

  const [ano, mes, dia] = input.split("-").map((item) => Number(item)); //no javascript o mês janeiro = 0, fevereiro=1,... dezembro=11. precisa diminuir 1
  const dataNascimento = new Date(ano, mes - 1, dia);
  console.log(dataNascimento);
  const hoje = new Date();

  // Calcular idade
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  console.log(idade);

  const jaFezAniversarioEsteAno =
    hoje.getMonth() > dataNascimento.getMonth() ||
    (hoje.getMonth() === dataNascimento.getMonth() &&
      hoje.getDate() >= dataNascimento.getDate());

  if (!jaFezAniversarioEsteAno) {
    idade--;
    console.log(idade);
  }

  // Próximo aniversário
  const proximoAniversario = new Date(hoje.getFullYear(), mes - 1, dia);

  if (hoje > proximoAniversario) {
    proximoAniversario.setFullYear(hoje.getFullYear() + 1);
  }

  // Diferença em dias
  const umDia = 24 * 60 * 60 * 1000;
  hoje.setHours(0, 0, 0, 0);
  proximoAniversario.setHours(0, 0, 0, 0);
  const diasFaltando = Math.ceil(
    (proximoAniversario.getTime() - hoje.getTime()) / umDia
  );

  // Exibição
  const resultado = `
      <p>📆 Sua idade atual é: <strong>${idade} anos</strong>.</p>
      <p>🎂 Faltam <strong>${diasFaltando} dias</strong> para seu próximo aniversário.</p>
      <p>🗓️ Seu próximo aniversário será em: <strong>${proximoAniversario.toLocaleDateString(
        "pt-BR"
      )}</strong>.</p>
    `;

  document.getElementById("resultado").innerHTML = resultado;
});
