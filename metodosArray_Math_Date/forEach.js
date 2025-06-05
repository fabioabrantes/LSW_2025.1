const usuarios = [
  { nome: "ana", email: "ana@email.com" },
  { nome: "CARLOS", email: "carlos@email" }, // inválido
  { nome: "joão", email: "joao@email.com" },
  { nome: "maria", email: "maria@email.com" },
  { nome: "lucas", email: "lucas@.com" }, // inválido
];

const usuariosValidos = [];
const usuariosInvalidos = [];

const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

usuarios.forEach((usuario) => {
  // Normaliza o nome: primeira letra maiúscula, resto minúsculo
  const nomeFormatado =
    usuario.nome.charAt(0).toUpperCase() + usuario.nome.slice(1).toLowerCase();

  // Valida o email com regex
  const emailValido = regexEmail.test(usuario.email);

  const usuarioFormatado = {
    nome: nomeFormatado,
    email: usuario.email,
  };

  if (emailValido) {
    usuariosValidos.push(usuarioFormatado);
  } else {
    usuariosInvalidos.push(usuarioFormatado);
  }
});

console.log("✅ Usuários válidos:", usuariosValidos);
console.log("❌ Usuários inválidos:", usuariosInvalidos);

/* 
📌 1. ^
Indica o início da string. A validação começa aqui.

📌 2. [^\s@]+
Conjunto de caracteres válidos antes do @:

[] → define um conjunto de caracteres permitidos ou proibidos.

^ (dentro dos colchetes) → negação, ou seja, "qualquer caractere exceto...".

\s → espaço em branco (espaço, tab, quebra de linha).

@ → o caractere @ (que queremos evitar nesta parte).

+ → um ou mais dos caracteres válidos.

👉 Portanto: [^\s@]+ significa

“um ou mais caracteres que não são espaços nem @”

📌 3. @
Literalmente o símbolo arroba, obrigatório num e-mail.

📌 4. [^\s@]+ (de novo)
Agora, é a parte do domínio antes do ponto (ex: gmail em fulano@gmail.com), com a mesma lógica:

“um ou mais caracteres que não são espaços nem @”

📌 5. \.
Um ponto literal. Como o . tem significado especial na regex (significa “qualquer caractere”), usamos \. para indicar um ponto real.

📌 6. [^\s@]+
Parte do domínio final (ex: com, org, net, etc).

📌 7. $
Indica o fim da string.
*/
