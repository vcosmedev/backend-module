const fs = require('fs');

// ('nombre del archivo a generar', 'data', callback)
fs.writeFile('koder.txt', 'Hola Koders desde fs de Node', (error) => {
    if(error) {
        console.log('Ocurrió un error: ', error);
        return;
    };
    console.log('Se ha creado el archivo!! :D')
});

