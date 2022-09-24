const fs = require('fs');

('nombre del archivo a generar', 'data', callback)
fs.writeFile('koder.txt', 'Hola Koders desde fs de Node', (error) => {
    if(error) {
        console.log('Ocurrió un error: ', error);
        return;
    };
    console.log('Se ha creado el archivo!! :D')
});

const fs = require('fs') // -> así importamos en node

fs.writeFile('koder.txt', 'Hola Koders desde fs de node', (error) => {
    if(error) {
        console.log('Ocurrio un error: ', error)
        return
    }
    console.log('Se ha creado el archivo!! :D')
});













