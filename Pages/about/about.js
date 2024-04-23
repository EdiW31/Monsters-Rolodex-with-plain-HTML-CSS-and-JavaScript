import { Navbar } from "../../Components/navbar/navbar.js";
import { Footer } from "../../Components/footer/footer.js";

document.getElementById("layout").innerHTML = `
  ${Navbar()}
  <main id="main-content">
    <!-- Home page content goes here -->
    Welcome to the about page!
  </main>
  ${Footer()}
`;
