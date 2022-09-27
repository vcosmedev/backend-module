import fs from 'fs' // Cambiar la extensión del archivo a .mjs

fs.writeFile('koder-1.txt', 'Hola Koders!!', (error) => {
    if(error) {
        console.log('Error: ', error);
        return;
    }
    console.log('Se ha creado el archivo!! :D');
});

/*
- Ejercicio de Callbacks del proceso de inscripcion en Kodemia
- Ir a la documentacion de node del modulo del file system, callback api
    Para Archivos
    - 1º .writeFile
    - 2º .readFile
    - 3º .appendFile
    - 4º .unLink
    - 5º .copyFile
    Para directorios
    - 1º .mkdir
    - 2º readdir
    - 3º rmdir
    Para cada método crear su script .js or .mjs
*/


// 2º .readFile

fs.readFile('./koder-1.txt', 'utf-8', (err, data) => {
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
});

// FORMA SINTETIZADA
// fs.readFile('./koder-1.txt', 'utf8', function (err, data) {
//     err ? console.log(err) : console.log(data);
// });



// 3º .appendFile 
// used to asynchronously append the given data to a file. A new file is created if it does not exist.

fs.appendFile('./koder-1.txt', 'Añadiendo data', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('La data fue añadida con éxito!!');
  });

// FORMA SINTETIZADA
//   fs.appendFile('./koder-1.txt', 'Añadiendo data', (err) =>{
//     err
//     ?console.log(err)
//     :console.log('La data fue añadida con éxito!!');
//     });



// 4º .unLink
// is used to remove a file or symbolic link from the filesystem.

fs.unlink('./koder-2.txt', (err) => {
    if (err) {
        console.log(err);
    } 
    console.log('El arhivo ./koder-2.txt fue eliminado');
  });

// FORMA SINTETIZADA
//   fs.unlink('./koder-2.txt', (err) =>{
//     err
//     ?console.log('Ha ocurrido un error')
//     :console.log('El arhivo ./koder-2.txt fue eliminado');
//     });



// 5º .copyFile
// used to asynchronously copy a file from the source path to destination path.

















