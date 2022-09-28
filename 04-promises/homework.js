/*
Prácticas: 
    1. Realizar el proceso de inscripción a Kodemia con promesas
        - Encadenamiento de promesas
        - async / await
    2. Práctica del CRUD de Koders con file System con promesas:
        A partir de archivo koders.json
        Realizar lo siguiente:
            1º Crear un función que permita leer el archivo e imprimir en consola el arreglo de Koders
            2º Crear una función que permita agregar un Koder y guardar el archivo con el cambio realizado
            3º Crear una función que permita eliminar a un Koder por su id y guardar el archivo con el cambio realizado
            4º Crear una función que permita editar a un Koder por su id y guardar el archivo con el cambio realizado
            5º Crear una función que permita obtener a los koders que sean mayores a 25 años
            JSON.parse() -> convierte de cadena a un objeto js
            JSON.stringify() -> convertir de objeto a string
            async / await
*/


const enrollment = {
    name: 'Víctor Cosme',
    isInterviewed: false, // true 
    hasAnOffer: false, // true 
    isEnrolled: false, // true 
    canTakeBootcamp: false // true 
};


function takeAnInterview(koderToInterview) {
    return new Promise ((resolve, reject) => {
        console.log(`Entrevistando a ${koderToInterview.name}`);
        setTimeout(() => {
            koderToInterview.isInterviewed = true;
            if(!koderToInterview.isInterviewed) {
                reject(`No se logró entrevistar a ${koderToInterview.name}`);
            }
            resolve(koderToInterview);
        }, 3000);
    });
};

function doOffer(koderToOffer) {
    return new Promise ((resolve, reject) => {
        console.log(`Viendo si le hacemos una oferta a ${koderToOffer.name}`);
        setTimeout(() => {
            koderToOffer.hasAnOffer = true;
            if(!koderToOffer.hasAnOffer) {
                reject(`${koderToOffer.name} no tiene una oferta`);
            }
            resolve(koderToOffer);
        }, 2000);
    });        
};


function toEnroll(koderToEnroll) {
    return new Promise ((resolve, reject) => {
        console.log(`El koder ${koderToEnroll.name} tiene que completar su matrícula`);
        setTimeout(() => {
            koderToEnroll.isEnrolled = true;
            if(!koderToEnroll.isEnrolled) {
                reject(`${koderToEnroll.name} no completa su matricula`);
            }
            resolve(koderToEnroll);
        }, 5000);
    });
};

function takeTheBootcamp(koderToTakeClass) {
    return new Promise ((resolve, reject) => {
        console.log(`El koder ${koderToTakeClass.name} cumple con los requisitos para tomar clases`);
        setTimeout(() => {
            koderToTakeClass.canTakeBootcamp = true;
            if(!koderToTakeClass.canTakeBootcamp) {
                reject(`${koderToTakeClass} no es candidat@ para tomar clases`);
            }
            resolve(koderToTakeClass);
        }, 3000);
    });
};

// // PROMISE HELL - Encadenamiento de promesas:

// takeAnInterview(enrollment)
//     .then((koderInterviewed) => {
//         console.log(`${koderInterviewed.name} ha sido entrevistad@!!`);
//         console.log(koderInterviewed);
//         return doOffer(koderInterviewed);
//     })
//     // Regresa una promesa
//     .then((koderWithOffer) => {
//         console.log(`${koderWithOffer.name} ya tiene una oferta!!`);
//         console.log(koderWithOffer);
//         return toEnroll(koderWithOffer);
//     })
//     // Regresa una promesa
//     .then((koderEnrolled) => {
//         console.log(`${koderEnrolled.name} ya está matriculad@!! :D`);
//         console.log(koderEnrolled);
//         return takeTheBootcamp(koderEnrolled);
//     })
//     // Regresa una promesa
//     .then((koderCanTakeTheBootcamp) => {
//         console.log(`${koderCanTakeTheBootcamp.name} ya puede tomar clases!!! :DD`);
//         console.log(koderCanTakeTheBootcamp);
//     })
//     .catch((error) => {
//         console.log('Error: ', error);
//     });


// async - await:

console.log('Con async await');

async function main() {
    const koderInterviewed = await takeAnInterview(enrollment); // REgresa una promesa
    console.log(`${koderInterviewed.name} ha sido entrevistad@!!`);
    console.log(koderInterviewed);

    const koderWithOffer = await doOffer(koderInterviewed);
    console.log(`${koderWithOffer.name} ya tiene una oferta!!`);
    console.log(koderWithOffer);

    const koderEnrolled = await toEnroll(koderWithOffer);
    console.log(`${koderEnrolled.name} ya está matriculad@!! :D`);
    console.log(koderEnrolled);

    const koderCanTakeTheBootcamp = await takeTheBootcamp(koderEnrolled);
    console.log(`${koderCanTakeTheBootcamp.name} ya puede tomar clases!!! :DD`);
    console.log(koderCanTakeTheBootcamp);
};

main() // Cuando una función es asíncrona, devuelve una promesa por lo que se debe manejar esta promesa con .then y .catch
    .then(() => {
        console.log('Todo cool, ya falta menos para que te conviertas en Koder <3')
    })
    .catch((error) => {
        console.log('Error: ', error)
    });



