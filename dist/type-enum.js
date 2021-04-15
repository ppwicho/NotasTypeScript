// Orientacion para Fotografias 
var landscape = 0;
var portait = 1;
var square = 2;
var panorama = 3;
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["Landscape"] = 0] = "Landscape";
    PhotoOrientation[PhotoOrientation["Portait"] = 1] = "Portait";
    PhotoOrientation[PhotoOrientation["Square"] = 2] = "Square";
    PhotoOrientation[PhotoOrientation["Panorama"] = 3] = "Panorama"; //3
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.Landscape;
console.log('landscape', landscape);
console.log('Landscape', PhotoOrientation[landscape]);
// los enum se pueden definir 
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["Landscape"] = 10] = "Landscape";
    PictureOrientation[PictureOrientation["Portait"] = 11] = "Portait";
    PictureOrientation[PictureOrientation["Square"] = 12] = "Square";
    PictureOrientation[PictureOrientation["Panorama"] = 13] = "Panorama"; // 13
})(PictureOrientation || (PictureOrientation = {}));
console.log('portait', PictureOrientation.Portait);
var Country;
(function (Country) {
    Country["Bolivia"] = "bol";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
    Country["EEUU"] = "usa";
    Country["Espana"] = "esp";
})(Country || (Country = {}));
var country = Country.Colombia;
console.log('country', country);
