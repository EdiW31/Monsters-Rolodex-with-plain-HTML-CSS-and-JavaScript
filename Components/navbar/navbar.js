export function Navbar() {
  return `
    <nav>
        <header>
          <p class="logo">Monsters Rolodex</p>
          <input type="checkbox" id="click">
          <label for="click" class="menu-btn">
           <i class="fa-solid fa-bars"></i>
          </label>

          <ul class="nav__links">
              <li><a href="/">All Monsters</a></li>
              <li><a href="../../Pages/about/about.html">Best Monsters</a></li>
              <li><a href="../../Pages/createMonster/createMonster.html">Add Monsters</a></li>
          </ul>

          <a class="cta" href="../../Pages/contact/contact.html"><button>Contact</button></a>
        </header>
    </nav>
    `;
}
