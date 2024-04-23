import { Navbar } from "../../Components/navbar/navbar.js";
import { Footer } from "../../Components/footer/footer.js";
import { fetchData } from "../../dataFetch.js";
import { Card } from "../../Components/card/card.js";

document.getElementById("layout").innerHTML = `
  ${Navbar()}
  <main id="main-content">
  <div class="container">
    <h1 contenteditable>Best Monsters</h1>
    <p>Here are all of your favourite Monsters.</p>
  </div>
    <div id="fav-users">
    <div id="favorite-cards-container"></div>
    </div>
  </main>
  ${Footer()}
`;

window.onload = async function () {
  let favorites = localStorage.getItem("favorites");
  favorites = favorites ? JSON.parse(favorites).map(Number) : [];
  console.log("favorites:", favorites);

  try {
    const data = await fetchData();
    console.log("data:", data);

    if (!Array.isArray(data)) {
      console.error("fetchData did not return an array");
      return;
    }

    const mainSection = document.querySelector("#favorite-cards-container");

    // Filter the data based on the favorites
    const favoriteData = data.filter((item) => favorites.includes(item.id));
    console.log("favoriteData:", favoriteData);

    favoriteData.forEach((item) => {
      const card = Card(item);
      console.log("card:", card);
      mainSection.innerHTML += card;
    });
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
  }
};
