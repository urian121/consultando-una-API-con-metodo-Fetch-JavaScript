async function obtenerPerroAleatorio() {
  const preloader = document.querySelector("#preloader");

  try {
    preloader.style.display = "block"; // mostrar el preloader

    const URL_API = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(URL_API);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data.message; // devuelve la URL de la imagen del perro
  } catch (error) {
    console.error(`Error en la consulta a la API: ${error}`);
  } finally {
    preloader.style.display = "none"; // ocultar el preloader
  }
}

async function mostrarPerro() {
  const imagen = await obtenerPerroAleatorio();

  document.querySelector("#imagen-perro").innerHTML = `
          <img src="${imagen}" alt="Perro aleatorio">
        `;
}
