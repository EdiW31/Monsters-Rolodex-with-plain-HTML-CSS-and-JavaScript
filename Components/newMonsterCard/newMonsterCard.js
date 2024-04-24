export function newMonsterCard({ id, name, email, website, phone }) {
  return `
        <div class="card-list">
          <article class="card">
            <figure class="card-image">
              <img src="https://robohash.org/${id}?set=set2&size=180x180" alt="Avatar of ${name}" />
            </figure>
            <div class="card-header">
              <a href="#">${name}</a>
              <button class="icon-button" data-id="${id}" onclick="handleFavoriteClick(event)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Heart">
                  <path d="M7 3C4.239 3 2 5.216 2 7.95c0 2.207.875 7.445 9.488 12.74a.985.985 0 0 0 1.024 0C21.125 15.395 22 10.157 22 7.95 22 5.216 19.761 3 17 3s-5 3-5 3-2.239-3-5-3z" />
                </svg>
              </button>
            </div>
            <div class="card-footer">
              
              <div class="card-meta card-meta--date">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" display="block" id="Calendar">
                  <rect x="2" y="4" width="20" height="18" rx="4" />
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <path d="M2 10h20" />
                </svg>
                <h3 class="info">Email:</h3> <p class="info"> ${email}</p>
              </div>
            </div>
            <button class="deleteButton more-info-button" onclick="deleteMonster(this)">Delete</button>
          </article>
        </div>
      `;
}
