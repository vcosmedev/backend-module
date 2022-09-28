// Objetivo: plasmar en funciones y callbacks dicho proceso

const enrollment = {
    name: 'Víctor Cosme',
    isInterviewed: false, // true 
    hasAnOffer: false, // true 
    isEnrolled: false, // true 
    canTakeBootcamp: false // true 
};


function takeAInterview(koderToInterview, callback) {
    console.log(`Entrevistando a ${koderToInterview.name}`)
    setTimeout(() => {
        let error = null;
        koderToInterview.isInterviewed = true;
        if(!koderToInterview.isInterviewed) {
            error = `No se logró entrevistar a ${koderToInterview.name}`
        }
        callback(error, koderToInterview);
    }, 3000);
};

function doOffer(koderToOffer, callback) {
    console.log(`Viendo si le hacemos una oferta a ${koderToOffer.name}`);
    setTimeout(() => {
        let error = null;
        koderToOffer.hasAnOffer = true;
        // Operador ternario
        // error = !koderToOffer.hasAnOffer
        //             ? `${koderToOffer.name} no tiene una oferta` // si cumple 
        //             : null // si NO cumple

        // Sintaxis del operador ternario
        // (condicion)
        //   ? -> si cumple la condicion
        //   : -> Si NO cumple la condicion
        
        // Operador and and
        error = !koderToOffer.hasAnOffer && `${koderToOffer.name} no tiene una oferta`;
        callback(error, koderToOffer);
    }, 4000);
};


function toEnroll(koderToEnroll, callback) {
    console.log(`El koder ${koderToEnroll.name} tiene que completar su matrícula`);
    setTimeout(() => {
        let error = null;
        koderToEnroll.isEnrolled = true;
        error = !koderToEnroll.isEnrolled && `${koderToEnroll.name} no completa su matricula`;
        callback(error, koderToEnroll);
    }, 5000);
};

function takeTheBootcamp(koderToTakeClass, callback) {
    console.log(`El koder ${koderToTakeClass.name} cumple con los requisitos para tomar clases`);
    setTimeout(() => {
        let error = null;
        koderToTakeClass.canTakeBootcamp = true;
        error = !koderToTakeClass.canTakeBootcamp && `${koderToTakeClass} no es candidat@ para tomar clases`;
        callback(error, koderToTakeClass);
    }, 3000);
};


takeAInterview(enrollment, (errorToInterview, koderInterviewed) => {
    if(errorToInterview) {
        console.log('Error entrevista: ', errorToInterview);
        return;
    };

    console.log(`${koderInterviewed.name} ha sido entrevistad@!! `)
    console.log(koderInterviewed)
    // Oferta
    doOffer(koderInterviewed, (errorDoOffer, koderWithOffer) => {
        if(errorDoOffer) {
            console.log('Error oferta: ', errorDoOffer);
            return;
        }
        console.log(`${koderWithOffer.name} ya tiene una oferta!!`);
        console.log(koderWithOffer);
        toEnroll(koderWithOffer, (errorToEnroll, koderEnrolled) => {
            if(errorToEnroll) {
                console.log('Error matrícula ', errorToEnroll);
                return;
            }
            console.log(`${koderEnrolled.name} ya está matriculad@!! :D`);
            console.log(koderEnrolled);
            
            takeTheBootcamp(koderEnrolled, (errorToTakeTheBootcamp, koderCanTakeTheBootcamp) => {
                if(errorToTakeTheBootcamp) {
                    console.log('Error tomar clases ', errorToTakeTheBootcamp);
                    return;
                }
                console.log(`${koderCanTakeTheBootcamp.name} ya puede tomar clases!!! :DD`);
                console.log(koderCanTakeTheBootcamp);
            });
        });
    });

});


