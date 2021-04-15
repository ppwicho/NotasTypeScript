var nullVariable;
nullVariable = null;
//nullVariable=1; // error ! 
var otherVariable = null;
otherVariable = 'test';
console.log('nullVariable', nullVariable);
console.log('otheVariable', otherVariable);
// Undefined
var undefindedVariable = undefined;
undefindedVariable = 'test';
// inferirlo como Any
var otherUndefined = undefined;
console.log('undefinedVariable', undefindedVariable);
console.log('otherUndefined', otherUndefined);
// null y undefined se pueden considerar subtipos tipo any 
var albumName;
albumName = null;
albumName = undefined;
