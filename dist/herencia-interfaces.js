"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portrait"] = 1] = "Portrait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 1,
    title: 'Yosemite',
    description: 'Amo Yosemite'
};
var picture = {
    id: 2,
    title: 'Grandes cecuoyas',
    orientation: PhotoOrientation.Landscape
};
var newPicture = {};
newPicture.id = 2;
newPicture.title = 'Moon';
//newPicture.orientation=PhotoOrientation.Panorama;
console.log('album', album);
console.log('newPicture', newPicture);
console.log('picture', picture);
