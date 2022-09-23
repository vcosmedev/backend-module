

console.log('Hello Node :D');

let myName = 'V´ctor Cosme';
const HOST = 'http://localhost:8080';

function sum(num1, num2) {
    return num1 + num2;
}

sum(10,12);


const substraction = (num1, num2) => num1 - num2;

if(false){
    console.log('Se ejectua cuando es verdadero')
}else {
    console.log('Se ejectua cuando es falso')
};

// Browser - Se aplica sobre el DOM - No será utilizado en NODE JS
// Manipulación del DOM
// Window
// fetch() (hacer llamadas a otros servidores) - Solo existe en el browser
// prompt('');
// alert('Soy una alerta');
// confirm('¿Estás seguro de borrar esto?');