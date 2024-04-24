export function form() {
  return `
  <div class="form-style-5">
    <form id="monsterForm">
    <fieldset>
    <legend>New Monster</legend>
    <input type="text" name="name" placeholder="Your Name *">
    <input type="email" name="email" placeholder="Your Email *">
    <input type="text"  name="id" placeholder="ID *">
    <input type="url"  name="url" placeholder="Website">
    <input type="tel"  name="tel" placeholder="Phone Number *">
    <textarea name="field3" placeholder="About yourself"></textarea>
    <input type="submit" value="Add">
        <button id="addFriendButton" type="submit">Add Friend</button>
    </input>
    </form>
  </div>
  `;
}
