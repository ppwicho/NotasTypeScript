"use strict";
console.log("hola VINOC word");
//Number 
//Explicito 
var phone;
phone = 1;
phone = 3329112911;
// phone="hola"; // Error
// Tipo inferido en TypeScript 
var phoneNumber = 3329112911;
//phoneNumber="hola";  // error
var hex = 0xf00d; // 0x como caracter inicial hexadecimal
var binary = 10; //0b como valor inicial binario
var octal = 484; // 0o como valor inicial octal 
// Tipo Boolean en TypeScript 
// Tipado explicito 
var isPro;
isPro = true;
// isPro=1; // error 
// Asignar con usos inferidos 
var isUserPro = false;
isUserPro = true;
//isUserPro=100; // nos detecta el error TS
// Tipos de Datos String en TS
var username = 'ppwicho';
username = "ppwicho2";
// A partir de ECMA 6 podemos usar ` backqoute para expresiones
// Template String 
// uso de back-tick ` 
var userInfo;
userInfo = "\n    User Info:\n    username: " + (username + 'Es Genial') + "\n    phone: " + phone + "\n    isPro : " + isPro + "\n";
console.log('userinfo', userInfo);
