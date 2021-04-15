// Orientacion para Fotografias 

//const landscape = 0; 

const portait = 1 ; 

const square =2; 

const panorama = 3; 

enum PhotoOrientation {
    Landscape=0, //0 
    Portait=1, //1
    Square=2, //2
    Panorama=3 //3
}

const landscape:PhotoOrientation=PhotoOrientation.Landscape;

console.log('landscape',landscape);
console.log('Landscape',PhotoOrientation[landscape]);

// los enum se pueden definir 

enum PictureOrientation
{
    Landscape=10, //0 
    Portait, // 11
    Square, // 12
    Panorama // 13
}

console.log('portait',PictureOrientation.Portait);

enum Country{
    Bolivia = 'bol',
    Colombia ='col',
    Mexico = 'mex',
    EEUU='usa',
    Espana='esp'
}

const country: Country=Country.Colombia;

console.log('country',country);


