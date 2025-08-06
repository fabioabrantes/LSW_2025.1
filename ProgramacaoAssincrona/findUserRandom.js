const fetchBtn = document.getElementById("fetch-user");
const userContainer = document.getElementById("user-container");

const API = "https://randomuser.me/api/";

fetchBtn.addEventListener("click", () => {
  userContainer.innerHTML = "<p>Carregando...</p>";

  setTimeout(() => {
    fetch(API, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        const user = data.results[0];
        const fullName = `${user.name.first} ${user.name.last}`;
        const email = user.email;
        const picture = user.picture.large;
        const phone = user.phone;


        userContainer.innerHTML = `
        <img src="${picture}" width:="100 height:"100" />
        <h2>${fullName}</h2>
        <p>${email}</p>
        <p>${phone}</p>
        `;
      })
      .catch((erro) => {
        userContainer.innerHTML = `<p>Errro ao buscar usuario</p> `;
        console.log(erro);
      });
  }, 5000);
});
