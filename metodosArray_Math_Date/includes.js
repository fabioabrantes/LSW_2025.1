const palavrasProibidas = [' idiota ', 'burro', ' feio '];

// Limpando o array de palavras proibidas (removendo espaços e padronizando)
const palavrasLimpas = palavrasProibidas.map(p => p.trim().toLowerCase());

function comentarioValido(comentario) {
  // Limpa e padroniza o comentário
  const comentarioFormatado = comentario.trim().replace(/\s+/g, ' ').toLowerCase();

  // Verifica se alguma das palavras proibidas está no comentário
  const bloqueado = palavrasLimpas.includes(comentarioFormatado);

  if (bloqueado) {
    console.log('🛑 Comentário bloqueado: contém palavras ofensivas.');
  } else {
    console.log('✅ Comentário aprovado.');
  }
}

comentarioValido(' burro');

comentarioValido('   IDIOTA   ');