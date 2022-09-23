// Callback -> Es la declaración/definición de una función que pasa
// como parámetro a otra función para ser ejecutada posteriormente


// Definción de la función - síncrona
function irAlSuperMercado(callback) {
    console.log('Yendo al supermercado...')
    console.log('Llegué al supermercado')
    const mensaje = callback(null, 'Hola. Ya estoy en el supermercado')
    console.log(mensaje)
}

// Declaración de la función - 
function avisar(error, mensaje) {
    if(error) {
        console.log('Ha ocurrido un error: ', error)
    }else {
        return mensaje
    }
}


// irAlSuperMercado(avisar()) //-> la ejecución de la función -> string ❌

// firma -> La forma en que una función recibre sus parámetros

/*
function cb(error, data) {
    if(error) {
        manejo del error
    }
    continuar
}
*/

/*
    1º Cuando hayamos llegado
    2º Avisar cuando haya comprado la despensa
    3º Avisar cuando haya llegado a casa
*/

// Síncronas
function pay(callback) {
    console.log('Pagando la despensa...')
    const mensaje = callback(null, 'Hola, ya pagué la despensa')
    console.log(mensaje)
}

// Síncronas
function arriveHome(callback) {
    console.log('Llegando a casa...')
    const mensaje = callback(null, 'Hola, ya estoy en casa san@')
    console.log(mensaje)
}

// Síncrona
irAlSuperMercado(avisar) // ✅
pay(avisar)
arriveHome(avisar)

// Síncrono
console.log('Hola!!')
console.log('¿Cómo están?')
const num1 = 10
const num2 = 20
console.log('sum: ', num1 + num2)

// Asincronismo en JS

// Asíncrono

console.log('Hola Koders!!!')

setTimeout(() =>{
    console.log('Hola Rafa!!')
    //  
},2000)

console.log('Buenas noches amigos!!')
console.log('Descansen Koders')

// Caso de uso

// const useCreated = createUser() //asincrono

// const userTemplate = `${useCreated.name} ${useCreated.lastName}`

let numero1
let numero2

// Jona selecionar dos número
console.log('Jona eligiendo números')
setTimeout(() =>{
    numero1 = 20
    numero2 = 30
    console.log('Jonatan ya eligió los números')
}, 3000)

console.log('sum: ', numero1 + numero2)

/*
Ejercicio: 
    1º Ir al supermercado -> 5s 
    2º Pagar la despensa -> 4s
    3º Llegando a casa -> 5s
    Que cada una de estas acciones sean asíncronas
*/


