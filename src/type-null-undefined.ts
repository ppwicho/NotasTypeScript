let nullVariable:null;
nullVariable=null;

//nullVariable=1; // error ! 

let otherVariable=null; 

otherVariable = 'test'; 

console.log('nullVariable',nullVariable);
console.log('otheVariable',otherVariable);

// Undefined

let undefindedVariable:undefined=undefined;
undefindedVariable = 'test';

// inferirlo como Any
let otherUndefined=undefined; 

console.log('undefinedVariable',undefindedVariable);

console.log('otherUndefined',otherUndefined);

// null y undefined se pueden considerar subtipos tipo any 

//-- strictNullChecks
// si muestra error el tipo estático TS, modificar tsconfig.json
/// tsc src/type-null-undefined.ts --strictNullChecks
let albumName:string;
//albumName=null;
//albumName=undefined;



