
/** Forma basica */
fetch('examples/example.json')
  .then(function (response) {
    //Aquí es donde pones lo que quieres hacer con la respuesta.**

  })
  .catch(function (error) {
    console.log('Oh No! There was a problem: \n', error);
  });


/** Validando una respuesta */
fetch('examples/example.json')
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    // Aquí es donde pones lo que quieres hacer con la respuesta.
  })
  .catch(function (error) {
    console.log('Looks like there was a problem: \n', error);
  });

/**forma 3 */
fetch('examples/example.json')
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    // Read the response as json.
    return response.json();
  })
  .then(function (responseAsJson) {
    // Do stuff with the JSON
    console.log(responseAsJson);
  })
  .catch(function (error) {
    console.log('Looks like there was a problem: \n', error);
  });

/** Usando el método post con Fetch */
fetch('https://example.com/users.json', {
  method: 'POST',
  mode: 'cors',
  redirect: 'follow',
  headers: new Headers({
    'Content-Type': 'text/plain'
  })
}).then(function () {
  /* manejar la respuesta */
});

/** Otro método con fetch */
fetch('https://example.com/users', {
  method: 'PUT', // or 'POST'
  body: JSON.stringify(data), // data can be `string` or {object}!
  headers: {
  'Content-Type': 'application/json'
}
}).then(res => res.json())
  .then(response => console.log('Success:', JSON.stringify(response)))
  .catch(error => console.error('Error:', error));