import { Navbar } from "../../Components/navbar/navbar.js";
import { Footer } from "../../Components/footer/footer.js";
import { fetchData } from "../../dataFetch.js";
import { Card } from "../../Components/card/card.js";

//fetching data
fetchData();
// ia users din localStorage
const users = JSON.parse(localStorage.getItem("users"));

document.getElementById("layout").innerHTML = `
  ${Navbar()}
  <main id="main-content">
  <div class="container">
    <h1 contenteditable>Welcome</h1>
    <p>This is a website where you can find</p>
    <p>all of your Monster friends.</p>
  </div>
  <div id="users">
    ${users.map(Card).join("")}
  </div>  
  </main>
  ${Footer()}
`;
