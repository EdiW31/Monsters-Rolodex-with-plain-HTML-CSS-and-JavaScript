export function moreDetailCards({
  id,
  monsterName,
  monsterEmail,
  monsterPhone,
  monsterWebsite,
}) {
  return `
    <div class="body">
        <aside class="profile-card">
        <header>
            <!-- here’s the avatar -->
            <img src="https://robohash.org/${id}?set=set2&size=180x180" alt="Avatar of ${name}" />

            <!-- the username -->
            <h1>
                    ${monsterName}
                </h1>

            <!-- and role or location -->
            <h2>
                    ${monsterEmail}
                </h2>

        </header>

        <!-- bit of a bio; who are you? -->
        <div class="profile-bio">

            <p>
            ${monsterPhone}
            </p>

        </div>
        <div class="profile-bio">

            <p>
            ${monsterWebsite}
            </p>

        </div>

        <!-- some social links to show off -->
        <ul class="profile-social-links">
            <li>
            <a target="_blank" href="https://www.facebook.com/weissEduard">
                <i class="fa fa-facebook"></i>
            </a>
            </li>
            <li>
            <a target="_blank" href="https://twitter.com/elonmusk">
                <i class="fa fa-twitter"></i>
            </a>
            </li>
            <li>
            <a target="_blank" href="https://github.com/ediw31">
                <i class="fa fa-github"></i>
            </a>
            </li>
            <li>
            <a target="_blank" href="https://www.instagram.com/edi.weiss99">
            
                <i class="fa fa-instagram"></i>
            </a>
            </li>
        </ul>
        </aside>
    </div>
    `;
}
