import { Navbar } from "../../Components/navbar/navbar.js";
import { Footer } from "../../Components/footer/footer.js";
import { contactForm } from "../../Components/contactForm/contact.js";

document.getElementById("layout").innerHTML = `
  ${Navbar()}
  <main id="main-content">
    <div class="container">
        <h1 contenteditable>Contact</h1>
    </div>
    <div id="contact-form">
      ${contactForm()}
  </main>
  ${Footer()}
`;
