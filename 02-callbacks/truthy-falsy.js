// falsy && truthy
// utilizados para evaluar sentencias en una estructura 'if' (true o false)

// truthy -> cualquier valor que evalúa a 'true' en una pregunta lógica
// "39843"
// 34
// 3.4
// {}
// []

// truthy
const cadena = 'hola'
const cualquierNum = 34
const objeto = {}
const array = []

console.log('Cadena: ', Boolean(cadena))
console.log('cualquier num: ', Boolean(cualquierNum))
console.log('Objeto: ', Boolean(objeto))
console.log('array: ', Boolean(array))


// falsy -> cualquier valor que evalúa a 'false' en una pregunta lógica
// falsy

const cadenaVacia = ''
const cero = 0
const valorNull = null
const valorIndefinido = undefined

console.log('Cadena vacia: ', Boolean(cadenaVacia))
console.log('Cero: ', Boolean(cero))
console.log('Null: ', Boolean(valorNull))
console.log('valorIndefinido : ', Boolean(valorIndefinido ))


console.log(Boolean('0'))  // truthy
console.log(Boolean(0)) // falsy