const d = new Date();
d.getDate();
console.log(d.getDate());
console.log(d.getDay());
d.setFullYear(2024);
console.log(d.toString());

const options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  weekday: "long",
  timeZone: "America/Sao_Paulo",
  timeZoneName: "long",
};
console.log(d.toLocaleDateString("pt-BR", options));

// Simulando uma entrada do usuário
const inputNascimento = "2000-04-19"; // exemplo de data de nascimento (ano-mês-dia)
const dataNascimento = new Date(inputNascimento);
const hoje = new Date();

// Calcular idade
let idade = hoje.getFullYear() - dataNascimento.getFullYear();
const jaFezAniversarioEsteAno =
  hoje.getMonth() > dataNascimento.getMonth() ||
  (hoje.getMonth() === dataNascimento.getMonth() &&
    hoje.getDate() >= dataNascimento.getDate());

if (!jaFezAniversarioEsteAno) idade--;

// Próximo aniversário
let proximoAniversario = new Date(
  hoje.getFullYear(),
  dataNascimento.getMonth(),
  dataNascimento.getDate()
);

if (hoje > proximoAniversario) {
  proximoAniversario.setFullYear(hoje.getFullYear() + 1);
}

// Dias até o próximo aniversário
const umDia = 24 * 60 * 60 * 1000; // milissegundos em um dia
const diasFaltando = Math.ceil(
  (proximoAniversario.getTime() - hoje.getTime()) / umDia
);

// Mostrar resultados no console
console.log("Data de nascimento:", dataNascimento.toLocaleDateString("pt-BR"));
console.log("Sua idade atual é:", idade, "anos");
console.log("Faltam", diasFaltando, "dias para seu próximo aniversário");
console.log(
  "Seu próximo aniversário será em:",
  proximoAniversario.toLocaleDateString("pt-BR")
);
