"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Asersiones de Typos <tipo> Angle Bracket syntax 
var username;
username = 'ppwicho';
// Tenemos una cadena, Ts confia en mi! 
var message = username.length > 5 ?
    "Welcome " + username :
    "Username is too short";
console.log('message', message);
var usernameWithId = 'ppwicho 1';
// Como obtener el username 
username = usernameWithId.substring(0, 10);
console.log('Username', username);
//Sintaxis "as"
message = username.length > 5 ?
    "Welcome " + username :
    "Username is too short";
var helloUser;
helloUser = 'hello paparazzi';
username = helloUser.substring(6);
console.log(username);
