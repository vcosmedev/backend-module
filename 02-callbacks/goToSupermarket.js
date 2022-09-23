/*
ACCIONES (asíncronas):
1) Ir al supermercado (5000ms)
2) Pagar la despensa (3000ms)
3) Llegar a casa (4000ms)

callback

*/


function goToSupermarket(cabllback) {
    console.log('Yendo al supermercado');
    setTimeout(() => {
        // Ejecución de la función a través del callback
        cabllback(null, 'Hola, ya llegué al supermercado');
        // callback('Hubo una manifestación!! D:, null);
    }, 5000);
};

function payThings(callback) {
    console.log('Haciendo fila para pagar');
    setTimeout(() => {
        callback(null, 'Hola ya pagué la despensa');
    }, 3000);
};

function arriveHome(callback) {
    console.log('Llegando a casa');
    setTimeout(() => {
        callback(null, 'Hola ya estoy en casa :D');
    }, 3000);
};


goToSupermarket((error, message) => {
    if(error){
        console.log('Ha ocurrido algo', error);
        return; // Retorna undefined
        // Termina la ejecución aquí -> Salidas tempranas -> if/else
    }
        console.log(message);

        payThings((error, message) => {
            if(error) {
                console.log('Error: ', error);
                return;
            }
            console.log(message);

            arriveHome((errorHome, messageHome) => {
                if(errorHome) {
                    console.log('Error: ', errorHome);
                    return;
                }
                console.log(messageHome);
            })
        })
} );


// CALLBACK HELL



// TIME TO PRACTICE !!!
/*
Proceso de inscripción a Kodemia

1) Recibir información | entrevista
2) Enviar la oferta
3) Inscripción
4) Prebootcamp

*/


