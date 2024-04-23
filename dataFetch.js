export async function fetchData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  localStorage.setItem("users", JSON.stringify(data));
}
