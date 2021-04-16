"use strict";
// Funcion para mostrar una foto
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portait"] = 1] = "Portait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; //3
})(PhotoOrientation || (PhotoOrientation = {}));
function showPicture(picture) {
    console.log("\n    [title: " + picture.title + "\n    date: " + picture.date + ",\n    orientation: " + picture.orientation + "\n    ]");
}
var myPic = {
    title: 'test',
    date: '20202',
    orientation: PhotoOrientation.Landscape
};
showPicture(myPic);
showPicture({
    title: 'Test Title',
    date: '20202-03',
    orientation: PhotoOrientation.Panorama
});
function generatePicture(config) {
    var pic = { title: 'Default', date: 'No Date' };
    if (config.title) {
        pic.title = config.title;
    }
    if (config.date) {
        pic.date = config.date;
    }
    return pic;
}
var picture = generatePicture({}); // Acepta la invocacion al usar ? en la interfaz
console.log(picture);
var user;
user = { id: 10, username: 'ppwicho', isPro: true };
try {
    user.id = 20; // Error
    console.log(user.id);
}
catch (_a) {
    console.log(user.id, 'Error usuario');
}
