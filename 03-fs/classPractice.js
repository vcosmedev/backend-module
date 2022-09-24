/*
PRÁCTICA FILE SYSTEM

A partir del archivo koders.json, realizar las siguientes aciones:

    1. Crear una función que permita leer el archivo e imprimir en consola el arreglo de Koders
    2. Crear una función que permita agregar a un Koder y guardar el archivo con el cambio realizado
    3. Crear una función que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
    4. Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio-update realizado
    5. Crear una función que permita obtener a los Koders que sean mayores de 25 años

REQUERIMIENTOS:
- File systems con callbacks
- Apoyar en métodos 
    * JSON.parse() -> convierte de un string a un objeto JS
    * JSON.stringyfy -> convierte de un objeto a un string JS
*/

const fs = require('fs');

function getKoders() {
    fs.readFile('./koders.json', 'utf8', (err, data) => {
        if(err){
            log('Error: ', err);
            return;
        }
        let koderParseado = JSON.parse(data);
        return  koderParseado.koders;
    })
}

// let koders = getKoders();
// console.log(koders);


function addKoder(newKoder) {
    const data = fs.readFileSync('./koders.json', 'utf8');
    let dataJSON = JSON.parse(data);
    dataJSON.koders.push(newKoder)

    dataString = JSON.stringify(dataJSON, null, 2)

    fs.writeFile('./koders.json', dataString, (err) => {
        if(err) {
            console.log("OOh! Hubo un error: ", err);
            return;
        }

        console.log("Se ah agregado un nuevo koders!");
    })
    console.log(dataJSON);
}

let objKoder = {
    "id": 5,
    "name" : "Victor",
    "lastname": "Arguello",
    "age": 25
}
//addKoder(objKoder)

/**
 * ! 3º Crear una funcion que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
 */

function deleteKoder(idKoder) {
    const data = fs.readFileSync('./koders.json', 'utf8');
    let dataJSON = JSON.parse(data);
    let koders = dataJSON.koders;

    dataJSON.koders = koders.filter(koder => koder.id !== idKoder);
    fs.writeFile('./koders.json', JSON.stringify(dataJSON, null, 2), (err) => {
        if(err){ 
            console.log('Error: ', err);
            return;
        }
        console.log('Se eliminó el koder :(');
    })
    console.log(dataJSON);
}

//deleteKoder(4)

/**
 * ! 4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
 */

function editKoder(idKoder) {
    const data = fs.readFileSync('./koders.json', 'utf8');
    let dataJSON = JSON.parse(data);
    const koders = dataJSON.koders;

    const updateKoder = koders.map( koder => koder.id === idKoder ? {...koder, name: 'Jose', lastname: 'Mendoza', age: 34} : koder);

    //console.log(updateKoder);

    fs.writeFile('./koders.json', JSON.stringify(updateKoder, null, 2), (err) => {
        if(err) {
            console.log("Error: ", err);
            return;
        }

        console.log('Se actualizó ');
    })
}

//editKoder(5)

/**
 * ! 5º Crear una función que permita obtener a los koders que sean mayores a 25 años
 */

function getKoderOld25(){
    const data = fs.readFileSync('./koders.json', 'utf8');
    const dataJSON = JSON.parse(data);
    console.log(dataJSON);

    let koderOld25 = dataJSON.filter(koders => koders.age > 25);
    console.log(koderOld25);
    
}

getKoderOld25();