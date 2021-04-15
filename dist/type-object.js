// Type: object 
var user;
user = {}; //Object 
user = {
    id: 1,
    username: 'paparazzi',
    fistName: 'Pablo',
    isPro: true
};
console.log('user', user);
// No se puede acceder con object vs Object en javascript
//console.log('user.username',user.username);
var myObj = {
    id: 1,
    username: 'paparazzi',
    fistName: 'Pablo',
    isPro: true
};
var isInstance = myObj instanceof Object; // clase Object en JavaScript
console.log('isInstance', isInstance);
console.log('myObj.username', myObj.username);
