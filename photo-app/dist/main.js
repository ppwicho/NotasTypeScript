"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("./user");
const album_1 = require("./album");
const picture_1 = require("./picture");
const photo_app_1 = require("./photo-app");
const user = new user_1.User(1, 'luixaviles', 'Luis', true);
const album = new album_1.Album(10, 'Platzi Pictures');
const picture = new picture_1.Picture(1, 'TypeScript Course', '2020-03', photo_app_1.PhotoOrientation.Landscape);
// Creamos relaciones
user.addAlbum(album);
album.addPicture(picture);
console.log('user', user);
// borramos album 
user.removeAlbum(album);
console.log('user', user);
