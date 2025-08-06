const API_URL = "https://jsonplaceholder.typicode.com/comments?_limit=5"; // API pública de testes
const commentsList = document.getElementById("comments-list");
const commentForm = document.getElementById("comment-form");

async function fetchComments() {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(response);
  const comentarios = await response.json();
  commentsList.innerHTML = "";
  comentarios.forEach((comentario) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <h2>${comentario.name}</h2>
    <p>${comentario.body}</p>
    `;
    commentsList.appendChild(li);
  });
}

async function postComment(name, body) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, body }),
  });

  const novoComentario = await response.json();
  commentsList.innerHTML = "";
  const li = document.createElement("li");
  li.innerHTML = `
    <h2>${novoComentario.name}</h2>
    <p>${novoComentario.body}</p>
    `;
  commentsList.appendChild(li);

  return novoComentario;
}

commentForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const body = document.getElementById("body").value;
  if(name && body){
    await postComment(name, body);
    commentForm.reset();
  }
  
});

fetchComments(); // carrega comentários ao abrir
