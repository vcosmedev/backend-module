/*
Ejercicio 1. Reaccionar a las siguientes rutas:

GET /koders -> Response: Aquí estarán todos los Koders
POST /kodrs -> Response: Aquí se puede crear un Koder
X /x -> Response: No se reconoce esta solicitud

*/

// Importamos module http de Node
const http = require('http');

// Declaración de servidor
// Recibe un request listener
const server = http.createServer((request, response) => {
    
    const url = request.url
    console.log('url: ', url)
    const method = request.method
    console.log('method: ', method)

    if(method === 'GET' && url === '/koders'){
        response.write('Aquí estarán todos los Koders :D')
    }else if(method === 'POST' && url === '/koders'){
        response.write('Aquí se puede crear un Koder :DD')
    }else{
        response.write('No se reconoce esta solicitud :SSS')
    }
    response.end() // Cerrando la respuesta

});

// Poner a escuchar al servidor
server.listen(8080, () => {
    console.log('Server listening on port 8080')
})