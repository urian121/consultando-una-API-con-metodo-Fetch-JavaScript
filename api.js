/*
 * Creando una función asincrona llamada obtenerPerroAleatorio
 * la misma retorna la respuesta la solicitud en dicha API
 */
async function obtenerPerroAleatorio() {
  const preloader = document.querySelector("#preloader");

  try {
    preloader.style.display = "block"; // mostrar el preloader

    //URL de la API
    const URL_API = "https://dog.ceo/api/breeds/image/random";
    const response = await fetch(URL_API);
    if (!response.ok) {
      console.log(`HTTP error! status: ${response.status}`);
    }
    //Obtener los datos en formato JSON
    const data = await response.json();

    console.log(data.message);
    return data.message; // devuelve la URL de la imagen del perro
  } catch (error) {
    console.error(`Error en la consulta a la API: ${error}`);
  } finally {
    preloader.style.display = "none"; // ocultar el preloader
  }
}

/**
 * La función mostrarPerro() llama a la función obtenerPerroAleatorio()
 * y la misma retorna la solicitud de una consulta a la API de mascotas, si la respuesta es
 * correcta retorna una imagen (URL de mascota)
 * La función mostrarPerro() pinta la respuesta obtenida desde la función obtenerPerroAleatorio()
 * en la vista atraves del identificador con id='imagen-perro'
 */
async function mostrarPerro() {
  const resp = await obtenerPerroAleatorio();

  document.querySelector("#imagen-perro").innerHTML = `
          <img src="${resp}" alt="Perro aleatorio">
        `;
}
