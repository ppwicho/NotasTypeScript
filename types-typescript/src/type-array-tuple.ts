//Corchetes []


//Tipo Explicito 

let users:string[];

users=['ppwicho','paparazzi','queen'];

//users=[1,true,'test']; // Error

//Tipo Inferido 

let otherUsers = ['ppwicho','paparazzi','queen'];

//users=[1,true,'test']; // Error

// arrayy <TIPO> 

let pictureTitles:Array<string>;

pictureTitles=['Favorite Sunset','Vacation Time', 'Landscape']; 

console.log('first user',users[0]); 

// Podemos procesar nuestros arreglos como objetos 
// Propiedades en array 

console.log(users.length);

users.push('platzi');

users.sort();

console.log(users); 

