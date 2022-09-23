

/* Crear una función que reciba un nombre como parámetro y devuelva un saludo con dicho nombre 

Output -> 'Hola {alguien}, buenas noches'

*/

function greeting(name) {
    return `Hola ${name}, ¡buenas noches!`;
}

let greet = greeting('Víctor')
console.log(greet);

const nameFer = 'Fer';
const greetFer = greeting(nameFer);
console.log(greetFer);

/*
Crear una función que me devuelva un nombre aleatorio de un arreglo

*/



function getRandomName() {
    const arrayNames = ['Víctor', 'Fanny', 'Jona', 'Fer', 'Xavy', 'Cin', 'Rodri'];
    const min = 0;
    const max = arrayNames.length;
    const indexRandom = Math.floor(Math.random() * (max - min) + min);
    return arrayNames[indexRandom];
}

const randomName = getRandomName();
console.log(randomName);

                    // Pasando como arguento la ejecución de una función
const firstGreet = greeting(getRandomName());
const nameRandom = getRandomName();
const secondGreet = greeting(nameRandom);

console.log(firstGreet);
console.log(secondGreet);

function hello(name) {
    return `Hola, ${name}, ¡buenas noches!`;
}

const x = hello('Víctor');
console.log('x', x);

// Pasar como referencia
const anotherFunction = hello;
console.log(anotherFunction);
const a = anotherFunction;
const b = hello;

console.log(b('Rodri'));

// 

const product = () => {}

// Funciones autoejecutables

// Factory function -> Funciones que generan funciones


