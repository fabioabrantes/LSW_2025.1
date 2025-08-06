const users = [
  { name: "João" },
  { name: "Maria" },
  { name: "Carlos" },
  { name: "Ana" },
];

const loading = document.getElementById("loading");
const userList = document.getElementById("user-list");
const clock = document.getElementById("clock");

// Simula carregamento de dados com atraso (como se fosse de um banco/API)
setTimeout(() => {
  loading.style.display = "none";

  users.forEach((user) => {
    const li = document.createElement("li");
    li.textContent = user.name;
    userList.appendChild(li);
  });
}, 3000); // 3 segundos de delay

// Atualiza o relógio a cada segundo
setInterval(() => {
  const now = new Date();
  clock.textContent = `Hora atual: ${now.toLocaleTimeString()}`;
}, 1000);
