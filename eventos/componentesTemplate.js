const users = [
  { name: "João", email: "joao@email.com", age: 25 },
  { name: "Maria", email: "maria@email.com", age: 30 },
];

const app = document.getElementById("app");

function createUserCard(user, index) {
  return `
    <div class="card" data-index="${index}">
      <p><strong>Nome:</strong> <span class="user-name">${user.name}</span></p>
      <p><strong>Email:</strong> <span class="user-email">${user.email}</span></p>
      <p><strong>Idade:</strong> <span class="user-age">${user.age}</span></p>
      <button class="edit-btn">Editar</button>
      <button class="delete-btn">Excluir</button>
    </div>
  `;
}

function renderUsers() {
  app.innerHTML = users.map((user, i) => createUserCard(user, i)).join("");

  document.querySelectorAll(".delete-btn").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const index = event.target.closest(".card").dataset.index;
      users.splice(index, 1);
      console.log(users);
      renderUsers();
    })
  );

  document.querySelectorAll(".edit-btn").forEach((btn) =>
    btn.addEventListener("click", (event) => {
      const card = event.target.closest(".card");
      const index = card.dataset.index;
      const user = users[index]; //Você não está copiando o objeto, está criando uma referência ao mesmo objeto que está dentro do array

      card.innerHTML = `
        <input type="text" value="${user.name}" class="edit-name">
        <input type="email" value="${user.email}" class="edit-email">
        <input type="number" value="${user.age}" class="edit-age">
        <button class="save-btn">Salvar</button>
        <button class="cancel-btn">Cancelar</button>
      `;

      card.querySelector(".save-btn").addEventListener("click", () => {
        console.log("Antes:", user.name);
        user.name = card.querySelector(".edit-name").value;
        console.log("Depois:", user.name);
        user.email = card.querySelector(".edit-email").value;
        user.age = card.querySelector(".edit-age").value;
        renderUsers();
      });

      card.querySelector(".cancel-btn").addEventListener("click", renderUsers);
    })
  );
}

renderUsers();
