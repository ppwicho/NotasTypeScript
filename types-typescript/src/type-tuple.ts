export {};  // Para quitar error de duplicidad de user  en editor

// Tuples 

let user:[number,string];
user = [1,'ppwicho']; 

console.log('user',user);

//arreglo de Tuplas 

let array:[number,string][]=[];
// = [] inicializar el arreglo.  De lo contrario error en push. 
array.push([1,'ppwicho']); // 0
array.push([2,'ssf']); // 1 
array.push([3,'rew']); // 2 

console.log('array:',array);


array[2][1]=array[2][1].concat("001");
console.log('array:',array);
