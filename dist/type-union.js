"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var idUser;
idUser = 10;
idUser = '10';
// pensemos en una funcion buscando nombre de usuario con id 
function getUsernameById(id) {
    // Logica de negocio, find the user
    console.log('id', id);
    return 'ppwicho';
}
getUsernameById(20);
getUsernameById('20');
// let smallPicture : SquareSize = '200x200' // Error
var smallPicture = '100x100'; // Error
var mediumPicture = '500x500';
// Definicion de las diferentes resoluciones 
