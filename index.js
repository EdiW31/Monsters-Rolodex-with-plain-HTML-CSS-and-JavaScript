// Aici adaugam onClick pentru butonul de favorite
window.handleFavoriteClick = function (e) {
  const id = e.target.closest(".icon-button").dataset.id;
  let favorites = localStorage.getItem("favorites");
  favorites = favorites ? JSON.parse(favorites) : [];
  const index = favorites.indexOf(id);
  // Daca id-ul nu exista in array, il adaugam
  if (index === -1) {
    favorites.push(id);
    // Adaugam clasa active pentru butonul de favorite
    e.target.closest(".icon-button").classList.add("active");
  } else {
    favorites.splice(index, 1);
    // Stergem clasa active pentru butonul de favorite
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
};
