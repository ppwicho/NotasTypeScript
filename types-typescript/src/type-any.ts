// Tipo explicito 

let idUser:any;

idUser =1; //number

idUser = '1'; //string

console.log('idUser:',idUser);

//Tipo inferido
let otherId;
otherId=1;

let surprise: any = 'hello typescript';

const res= surprise.substring(6);

console.log('res',res);

