// Crear una fotografia 

// function createPicture(title,date,size){
//     //title
// }

type SquareSize = '100x100' | '500x500' | '1000x1000';

// Usamos TS, definimos tipos para parametros 

// function createPicture(title:string,date:string,size:SquareSize){
//     //se crea la Fotografia
//     console.log('create Picture using',title, date, size); 

// }

// createPicture('My Birthday','today','1000x1000');
// createPicture('Mexico Trip','2020');

// Parametros opcionales en funciones 

function createPicture(title?:string,date?:string,size?:SquareSize){
    //se crea la Fotografia
    console.log('create Picture using',title, date, size); 

}

createPicture('My Birthday','today','1000x1000');
createPicture('Mexico Trip','2020');


//Flat Array Functions 
// A partir ES6
let createPic = (title:string, date:string,size:SquareSize):object => {
    // return {
    //     title:title,
    //     date:date,
    //     size:size
    // };
    // Tambien se puede evitar la varibale si es el mismo nombre
    return{
        title,
        date,
        size
    };
};


const picture = createPic('Clase TS','2020-03-10','100x100');

console.log(picture);

// Tipo de retorno en funciones TS 

function handleError(code:number,message:string):never | string{
    //procesar logica
    if(message==='error'){
        throw new Error(`${message}.Code Error: ${code}`);
    }else {
        return 'An error has occurred';
    }
};

try{

let result = handleError(200,'OK'); 

console.log('result',result); 

result= handleError(404,'error'); 

console.log('result',result); 
}catch(error){}
