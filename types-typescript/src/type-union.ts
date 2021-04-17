export {};

// 10, '10' 

// let idUser:number | string;

// idUser = 10;
// idUser='10'; 

// // pensemos en una funcion buscando nombre de usuario con id 

// function getUsernameById(id:number | string){
//     // Logica de negocio, find the user
//     console.log('id',id);
//     return 'ppwicho';
// }

// getUsernameById(20);
// getUsernameById('20');


// Alias de tipos para ts 

type IdUser = number | string; 
type Username = string;
let idUser:number | string;

idUser = 10;
idUser='10'; 

// pensemos en una funcion buscando nombre de usuario con id 

function getUsernameById(id:IdUser) : Username{
    // Logica de negocio, find the user
    console.log('id',id);
    return 'ppwicho';
}

getUsernameById(20);
getUsernameById('20');

// Union de tipos

type SquareSize = '100x100' | '500x500' | '1000x1000'; 

// let smallPicture : SquareSize = '200x200' // Error
let smallPicture : SquareSize = '100x100' // Error
let mediumPicture : SquareSize = '500x500' 

// Definicion de las diferentes resoluciones 


