// Void es lo opuesto de ANY, representa 
//ausensia de valor. 
//Se utiliza para funciones cuando no returnan nada. 
// Tipo explicito 
function showInfo(user) {
    console.log('User Info', user.id, user.username, user.fistName);
    //return 'hola';
}
showInfo({ id: 1, username: 'ppwicho', fistName: 'Luis' });
//Tipo inferido 
function showFormattedInfo(user) {
    console.log('User Info', "\n    \n        id:" + user.id + "\n        username:" + user.username + "\n        firstName:" + user.firstName + "\n    ");
}
showFormattedInfo({ id: 1, username: 'ppwicho', fistName: 'Luis' });
// tipo void, como tipo de dato en variable 
var unusable;
// Podemos quitar el tipo estricto en tsconfi.json 
// Nos deja usar null en void === null 
unusable = null;
// Tipo: Never 
// funcion para gestionar errores 
// Tipo: Never
function handleError(code, message) {
    // Process your code here
    // Generate a message
    throw new Error(message + ". Code: " + code);
}
try {
    handleError(404, 'Not Found');
}
catch (error) { }
function sumNumbers(limit) {
    // dado que la suma es infinita
    var sum = 0;
    while (true) {
        sum++;
    }
}
sumNumbers(10);
//ciclo infinito, programa nunca termina
