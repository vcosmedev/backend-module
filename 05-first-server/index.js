// Implementar módulo http que nos ofrece Node - ¿Cómo importamos un módulo?
// Hasta ahora, hemos visto método 'require' - La única diferencia vs lo que hemos visto hasta ahora, 
// es que vamos a importar el módulo 'http'

// Importamos module http de Node
const http = require('http');

// Declaración de servidor
// Recibe un request listener
const server = http.createServer((request, response) => {
    
    const url = request.url
    console.log('url: ', url)
    const method = request.method
    console.log('method: ', method)

    response.write('Hola desde mi servidor en Node :D')
    response.end() // Cerrando la respuesta

});

// Server tiene un métoo llamado listen el cual escucha al puerto 8080 -> Poniendo a escuchar en un puerto al server
/*

Existen diferentes puertos. Por ejemplo:
    8080 -> Ambiente de desarrollo
    http -> Port 80
    https -> Port 443, protocolo http seguro
    ssh -> 22

*/

// Poner a escuchar al servidor
server.listen(8080, () => {
    console.log('Server listening on port 8080')
})

// http://localhost:8080/



