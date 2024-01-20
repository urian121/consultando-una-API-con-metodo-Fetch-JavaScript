##  Consultando una API con método Fetch JavaScript

##### Ejemplo práctico para consulta una API con el método fetch de JavaScript, ademas usando los métodos async y await para hacerlo un poquito más atractiva la petición.

##### El método fetch hacer una solicitud GET a la API de perros aleatorios. Después, verificamos si la respuesta es satisfactoria (response.ok devuelve true) y lanzamos un error si no lo es.

##### Si la respuesta es satisfactoria, usamos await response.json() para obtener los datos en formato JSON y guardarlos en una variable llamada data. Finalmente, hacemos lo que queramos con los datos, en este caso, imprimimos los datos en la consola del navegador.

##### Es importante tener en cuenta que el método fetch devuelve una promesa, por lo que es necesario usar async/await para manejar la respuesta de la API de manera asíncrona. También se recomienda envolver el código en un bloque try-catch para manejar los errores correctamente.

##### Recodermos que el método async se asegura de que la función devuelva una promesa y el método await se asegura de esperar una respuesta de la peticion antes de continual ejecutando mas codigo.


![](https://raw.githubusercontent.com/urian121/imagenes-proyectos-github/master/metodo-fetch.png)
