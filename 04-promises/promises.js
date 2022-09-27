// /*

// Promesa: objeto que representa el resultado de una ejecución asíncrona

// */

// // PROMISES
// // Tene su constructor que nos permite crear objetos de tipo promesa
// // new Promise()
// // El constructor recibe una función como parámetro (callback)

// // Sintaxis de una promesa
// // new Promise((resolve, reject) => {
// //     if('Everyting is ok') resolve('Everything is fine!!');
// //     if('There is an error') reject('Smth happened');
// // });

// // resolve(es una función) -> Al invocar la función resolve() esta cambia el estado de la promesa a resolved
// // reject(es una función) -> Al invocar la fucion reject(), esta cambia el estado de la promesa a rejected

// const myFirstPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let error = null; // let error = 'There is an error';
//         if(error) {
//             reject('Smth happened');
//         };
//         resolve('Everything is ok!! :D');
//     }, 2000);
// });

// // Manejar una promesa por medio de los métodos .then y .catch:

// myFirstPromise
//     .then((result) => {
//         console.log('result', result);
//         // Cuando sea exitoso
//     })
//     .catch((error) => {
//         console.log('Error: ', error);
//         // Cuando ocurra un error
//     });

// // Las promesas son objetos a los que se puede acceder con los métodos .then y .catch

// /* Para manejar la promesa, es decir, si fue cumplida o no, se puede acudir a los métodos 
// de las promesas (al igual que los objetos tenían métodos, las promesas también).

// Para las promesas, se encuentran:

// .then(() => {}); // Maneja la promesa cuando haya sido exitosa
//                     - Recibe un callback
//                     - Regresa lo que se pasa en la función resolve();

// .catch(() => {}); // Maneja la promesa cuando haya sido rechazada
//                     - Recibe un callback
//                     - Regresa lo que se pasa en la función reject();

// */



// /*
// Guardar las promesas en una variable es una opción, la que se veía anteriormente. Otra opción o 
// alternativa es que la promesa sea 'wrappeaada' por una función:

//     function smthAsync() {
//         return promise
//     };

// */

// function smthAsync() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let error = null;
//             if(error) {
//                 reject('There was an error, help!');
//             }
//             resolve('Everything is ok!! =DD');
//         }, 1000);
//     });
// };

// smthAsync()
//     .then((result) => {
//         console.log('Result: ', result);
//     })
//     .catch((error) => {
//         console.error('Error: ', error);
//     });

// EXERCISE - Hacer compras

const doTheShopping = {
    name: 'Víctor',
    atSuperMarket: false,
    atCheckout: false,
    atHome: false
} 


function goToSupermarket(personGoToSupermarket) {
    return new Promise ((resolve, reject) => {
        console.log(`${personGoToSupermarket.name} está yendo al supermercado...`);
        setTimeout(() => {
            personGoToSupermarket.atSuperMarket = true;
            if(!personGoToSupermarket.atSuperMarket) {
                reject(`${personGoToSupermarket.name} no pudo llegar al supermercado`);
            }
            resolve(personGoToSupermarket);
        }, 3000);
    });
};

function payingThings(personToPay) {
    return new Promise((resolve, reject) => {
        console.log(`${personToPay.name} está haciendo fila para pagar...`);
        setTimeout(() => {
            personToPay.atCheckout = true;
            if(!personToPay.atCheckout) {
                reject(`${personToPay.name} no updo pagar la despensa.`);
            }
            resolve(personToPay);
        }, 2000);
    });
};

function goingHome(personGoingHome) {
    return new Promise((resolve, reject) => {
        console.log(`${personGoingHome.name} está yendo a casa...`);
        setTimeout(() => {
            personGoingHome.atHome = true;
            if(!personGoingHome.atHome) reject(`${personGoingHome.name} no pudo llegar a casa.`);
            resolve(personGoingHome);
        }, 3000);
    });
};


// goToSupermarket(doTheShopping)
//     .then((personAtSupermarket) => {
//         console.log(`${personAtSupermarket.name} ya está en el supermercado`);
//         console.log(personAtSupermarket);
//         // Aqui ya llegó al supermercado
//         payingThings(personTheSupermarket)
//             .then((personWithTheShopping) => {
//                 console.log(`${personWithTheShopping.name} ya pagó su despensa`);
//                 goingHome(personWithTheShopping)
//             .then((personAtHome) => {
//                 console.log(`${personAtHome.name} ya está en casa`);
//             })
//             .catch((error) => {
//                 console.log('Error :', error);
//             });
//         });
//     })
//     .catch((error) => {
//         console.log('Error: ', error);
//     });


// PROMISE HELL


// Encadenamiento de promesas: 

// goToSupermarket(doTheShopping)
//     .then((personAtSupermarket) => {
//         console.log(`${personAtSupermarket.name} ya llegó al supermercado`);
//         console.log(personAtSupermarket);
//         return payingThings(personAtSupermarket);
//     })// Regresa otra promesa
//     .then((personWithTheShopping) => {
//         console.log(`${personWithTheShopping.name} ya pagó su despensa`);
//         console.log(personWithTheShopping);
//         return goingHome(personWithTheShopping);
//     }) // Regresar otra promesa
//     .then((personAtHome) => {
//         console.log(`${personAtHome.name} ya está en casa`);
//         console.log(personAtHome);
//     })
//     .catch((error) => {
//         console.error('Error: ', error);
//     });

// Es más bonita 😃



// Otra forma de manejar las promesas: async await (ojo, las promesas SIEMPRE se crean con new Promise(), no confundir con su manejo)

// /* 

// ASYNC / AWAIT

// async: marca una fución como asíncrona
// await: espera el resultado de una promesa

// Condiciones a seguir:
//     - Para usar await, se necesita una función que 'wrappeará' y será marcada como asíncrona
//     Donde se utiliza 'await' se necesita marcar la función que la contiene como asícrona

//     - Las funciones marcadas como 'async' por default regresa una PROMESA

// */

// 'main' -> función que ejecutará todo 

console.log('Con async await');

async function main() {
    const personAtSupermarket = await goToSupermarket(doTheShopping); // REgresa una promesa
    console.log(`${personAtSupermarket.name} ya llegó al supermercado`);
    console.log(personAtSupermarket);

    const personWithTheShopping = await payingThings(personAtSupermarket);
    console.log(`${personWithTheShopping.name} ya pagó su despensa`);
    console.log(personWithTheShopping);

    const personAtHome = await goingHome(personWithTheShopping);
    console.log(`${personAtHome.name} ya está en casa`);
    console.log(personAtHome);
};

main() // Cuando una función es asíncrona, devuelve una promesa por lo que se debe manejar esta promesa con .then y .catch
    .then(() => {
        console.log('Todo cool ;)')
    })
    .catch((error) => {
        console.log('Error: ', error)
    });



    // Top level await - función sin necesidad de indicar 'async' próximamente (no liberado yet)
    // const personAtSupermarket = await goToSupermarket(doTheShopping); // Regresa una promesa
    // console.log(`${personAtSupermarket.name} ya llegó al supermercado`);
    // console.log(personAtSupermarket);