/*

Crear servidor

Responde un JSON

GET /koders -> {"message": "Aquí se obtendrán los Koders"}
¿Cómo responder con JSON?
Content-Type: mimetype
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



