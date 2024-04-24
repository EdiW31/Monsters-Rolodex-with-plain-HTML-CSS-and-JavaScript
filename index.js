// Aici adaugam onClick pentru butonul de favorite
window.handleFavoriteClick = function (e) {
  const id = Number(e.target.closest(".icon-button").dataset.id);
  let favorites = localStorage.getItem("favorites");
  favorites = favorites ? JSON.parse(favorites) : [];
  const index = favorites.indexOf(id);
  // daca nu exista id-ul in array, il adauga
  if (index === -1) {
    favorites.push(id);
    // adauga clasa active daca id-ul nu exista in array
    e.target.closest(".icon-button").classList.add("active");
  } else {
    favorites.splice(index, 1);
    // sterge clasa active daca id-ul exista in array
    e.target.closest(".icon-button").classList.remove("active");
  }
  localStorage.setItem("favorites", JSON.stringify(favorites));
  console.log(favorites);
};

// Aici setam clasa active pentru butonul de favorite
// este o functie care este called
window.onload = function () {
  let favorites = localStorage.getItem("favorites");
  favorites = favorites ? JSON.parse(favorites) : [];
  favorites.forEach((id) => {
    const button = document.querySelector(`.icon-button[data-id="${id}"]`);
    if (button) {
      button.classList.add("active");
    }
  });

  document.querySelectorAll(".more-info-button").forEach((button) => {
    button.addEventListener("click", function () {
      const monsterId = this.dataset.id; //date luate de la buton din cards.js
      const monsterName = this.dataset.name;
      const monsterEmail = this.dataset.email;
      const monsterWebsite = this.dataset.website;
      const monsterPhone = this.dataset.phone;

      localStorage.setItem("monsterId", monsterId);
      localStorage.setItem("monsterName", monsterName);
      localStorage.setItem("monsterEmail", monsterEmail);
      localStorage.setItem("monsterWebsite", monsterWebsite);
      localStorage.setItem("monsterPhone", monsterPhone);
      window.location.href = "aboutMonsters.html";
    });
  });
};
