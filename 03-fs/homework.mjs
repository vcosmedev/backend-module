import fs from 'fs' // Cambiar la extensión del archivo a .mjs

/*
- Ejercicio de Callbacks del proceso de inscripción en Kodemia
- Ir a la documentación de Node del modulo del file system, callback api:
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

// PARA ARCHIVOS
// 1º .writeFile
fs.writeFile('koder-1.txt', 'Hola Koders!!', (error) => {
    if(error) {
        console.log('Error: ', error);
        return;
    }
    console.log('Se ha creado el archivo!! :D');
});

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

fs.copyFile('./koder.txt', './koder-copy.txt', (err) => {
    if (err) {
        console.log(err);
    } 
    console.log('El archivo ./koder.txt fue copiado');
  });

// FORMA SINTETIZADA
// fs.copyFile('./texto.txt', './copyText.txt', err => {
//     err
//     ?console.log('Ha ocurrido un error')
//     :console.log('Tu archivo ha sido copiado correctamente');
// });


// PARA DIRECTORIOS
// 1º .mkdir


fs.mkdir('./03-fs/newFile', { recursive: true }, (err) => {
    if (err) {
        console.log(err);
    }
    console.log('Tu carpeta "newFile" fue creada existosamente');
  });

// FORMA SINTETIZADA
// fs.mkdir('./03-fs/newFile', { recursive: true }, err => {
//    err
//    ?console.log('Ha ocurrido un error')
//    :console.log('Tu carpeta "newFile" fue creada existosamente');
//  });

// 2º readdir
// Un búfer es un espacio en la memoria (en general, RAM) que almacena datos binarios. En Node.js, 
// podemos acceder a estos espacios de memoria con la clase Buffer incorporada.

let dir = 'newFile';
let dirBuffer = Buffer.from(dir);

fs.readdir(dirBuffer, (err, files) => {
    if (err) {
        console.log(err);
    }
    console.log('Tu carpeta "newFile" fue leída exitosamente');
});

// FORMA SINTETIZADA
// fs.readdir(dirBuf, (err, files)=>{
//     err
//    ?console.log('Ha ocurrido un error')
//    :console.log(files);
// });


// 3º rmdir

fs.rmdir('./03-fs/newFileTest', (err) => {
    if(err) {
        console.log(err)
    }
    console.log('Tu carpeta "newFileTest" fue eliminada exitosamente');
});


// FORMA SINTETIZADA
// fs.rmdir('..//fileExample', (err) =>{
//    err
//    ?console.log('Ha ocurrido un error')
//    :console.log('Tu carpeta ha sido eliminada existosamente');
// });



