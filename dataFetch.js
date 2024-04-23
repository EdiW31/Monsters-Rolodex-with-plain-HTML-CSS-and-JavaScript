// Exportam functia fetchData ca o functie asincrona
export async function fetchData() {
  try {
    // Facem o cerere HTTP GET catre URL-ul "https://jsonplaceholder.typicode.com/users"
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    // Verificam daca raspunsul este ok
    if (!response.ok) {
      // Daca nu este ok, afisam un mesaj de eroare si returnam un array gol
      console.error(
        "A aparut o eroare in timpul preluarii datelor:",
        response.statusText
      );
      return [];
    }
    // Parsam raspunsul ca JSON si il salvam in variabila data
    const data = await response.json();
    // Verificam daca data este un array
    if (!Array.isArray(data)) {
      // Daca nu este un array, afisam un mesaj de eroare si returnam un array gol
      console.error("Datele preluate nu sunt un array");
      return [];
    }
    // Salvam data in localStorage sub cheia "users"
    localStorage.setItem("users", JSON.stringify(data));
    // Returnam data
    return data;
  } catch (error) {
    // Daca apare o eroare in timpul preluarii datelor, afisam un mesaj de eroare si returnam un array gol
    console.error("A aparut o eroare in timpul preluarii datelor:", error);
    return [];
  }
}
