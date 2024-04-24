import { Navbar } from "../../Components/navbar/navbar.js";
import { Footer } from "../../Components/footer/footer.js";
import { newMonsterCard } from "../../Components/newMonsterCard/newMonsterCard.js";
import { form } from "../../Components/form/form.js";

document.getElementById("layout").innerHTML = `
  ${Navbar()}
  <main id="main-content">
  <div class="container">
    <h1 contenteditable>Add Monsters</h1>
    <p>Here you can add new Monsters</p>
  </div>
    <div id="fav-users">
        ${form()}
    </div>
    <div id="users">
    </div> 
  </main>
  ${Footer()}
`;

window.onload = function () {
  const storedMonsters = JSON.parse(localStorage.getItem("monsters")) || [];

  for (const monster of storedMonsters) {
    const createNewMonsterCard = newMonsterCard(monster);

    // adauga cardul monstrului in DOM
    document.getElementById("users").innerHTML += createNewMonsterCard;
  }

  document
    .getElementById("addFriendButton")
    .addEventListener("click", function (event) {
      // previne comportamentul default al formularului
      event.preventDefault();

      // ia datele din form
      const formData = new FormData(document.getElementById("monsterForm"));

      // creaza un obiect nou de monstru
      const newMonster = {
        name: formData.get("name"),
        email: formData.get("email"),
        id: formData.get("id"),
        about: formData.get("about"),
        website: formData.get("website"),
        phone: formData.get("phone"),
      };

      // creaza un nou card pentru monstru
      const createNewMonsterCard = newMonsterCard(newMonster);

      // adauga cardul monstrului in DOM
      document.getElementById("users").innerHTML += createNewMonsterCard;

      // adauga monstrul in lista de monsters
      storedMonsters.push(newMonster);

      // da store la monsters in local storage
      localStorage.setItem("monsters", JSON.stringify(storedMonsters));
    });

  // functie pentru a sterge un monster
  const deleteButton = document.querySelector(".deleteButton");
  deleteButton.onclick = function () {
    // cardul monstrului
    const card = this.parentNode;

    // id-ul monstrului
    const monsterId = Number(card.getAttribute("data-id"));

    // sterge monstrul din DOM
    this.parentNode.remove();

    // sterge monstrul din local storage
    storedMonsters = storedMonsters.filter(
      (monster) => Number(monster.id) !== monsterId
    );

    // update local storage
    localStorage.setItem("monsters", JSON.stringify(storedMonsters));
  };
};
