console.log("hola VINOC word")

//Number 
//Explicito 

let phone:number;
phone=1;
phone=3329112911;

// phone="hola"; // Error

// Tipo inferido en TypeScript 

let phoneNumber = 3329112911;
//phoneNumber="hola";  // error
 
let hex:number = 0xf00d; // 0x como caracter inicial hexadecimal
let binary:number=0b1010; //0b como valor inicial binario
let octal:number = 0o744; // 0o como valor inicial octal 

// Tipo Boolean en TypeScript 
// Tipado explicito 
let isPro:boolean;
isPro=true; 

// isPro=1; // error 

// Asignar con usos inferidos 

let isUserPro=false; 
isUserPro=true; 

//isUserPro=100; // nos detecta el error TS


// Tipos de Datos String en TS

let username:string='ppwicho';
username = "ppwicho2"; 

// A partir de ECMA 6 podemos usar ` backqoute para expresiones

// Template String 
// uso de back-tick ` 

let userInfo:string;
userInfo=`
    User Info:
    username: ${username + 'Es Genial'}
    phone: ${phone}
    isPro : ${isPro}
`;
console.log('userinfo',userInfo);