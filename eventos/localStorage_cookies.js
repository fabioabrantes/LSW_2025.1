// Utilidade para cookies
function setCookie(name, value, days) {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(KeyParams) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === KeyParams) return val;
  }
  return;
}

// Elementos
const usernameInput = document.getElementById("username");
const themeSelect = document.getElementById("theme-select");
const saveBtn = document.getElementById("save-btn");

// Aplicar preferências salvas
window.onload = () => {
  const savedName = getCookie("username");
  const savedTheme = localStorage.getItem("theme");

  if (savedName) usernameInput.value = savedName;
  if (savedTheme) {
    themeSelect.value = savedTheme;
    document.body.classList.toggle("dark", savedTheme === 'ligth'? 'ligth':"dark");
  }
};

// Salvar ao clicar
saveBtn.addEventListener("click", () => {
  const name = usernameInput.value.trim();
  const theme = themeSelect.value;

  if (name) {
    setCookie("username", name, 7); // Cookie por 7 dias
  }

  localStorage.setItem("theme", theme);
  document.body.classList.toggle("dark", theme === "dark");
  alert("Preferências salvas!");
});