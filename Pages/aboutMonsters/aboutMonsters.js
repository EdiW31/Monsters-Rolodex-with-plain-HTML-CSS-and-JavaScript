import { Navbar } from "../../Components/navbar/navbar.js";
import { moreDetailCards } from "../../Components/moreDetailCard/moreDetailCard.js";
import { fetchData } from "../../dataFetch.js"; // Import fetchData

// Get the monster ID from localStorage
const monsterId = localStorage.getItem("monsterId");

// Fetch the monster's details
fetchData(`https://jsonplaceholder.typicode.com/users/${monsterId}`).then(
  (fetchedMonster) => {
    // Get the other items from localStorage
    const monsterId = localStorage.getItem("monsterId");
    const monsterName = localStorage.getItem("monsterName");
    const monsterEmail = localStorage.getItem("monsterEmail");
    const monsterPhone = localStorage.getItem("monsterPhone");
    const monsterWebsite = localStorage.getItem("monsterWebsite");

    // Add them to the fetchedMonster object
    fetchedMonster.id = monsterId;
    fetchedMonster.monsterName = monsterName;
    fetchedMonster.monsterEmail = monsterEmail;
    fetchedMonster.monsterPhone = monsterPhone;
    fetchedMonster.monsterWebsite = monsterWebsite;

    // Display the monster's details
    document.getElementById("layout").innerHTML = `
      ${Navbar()}
      <main id="main-content">
      ${moreDetailCards(fetchedMonster)}
      </main>
    `;
  }
);
