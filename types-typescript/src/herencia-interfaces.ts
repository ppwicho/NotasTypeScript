export {};

enum PhotoOrientation{
    Landscape,
    Portrait,
    Square,
    Panorama
}

interface Entity{
    id:number;
    title:string;
}

interface Album extends Entity{
    // copia de los atributos Entity
    description:string
}

interface Picture extends Entity{
    orientation:PhotoOrientation
}

const album: Album={
    id:1,
    title:'Yosemite',
    description:'Amo Yosemite'
};

const picture:Picture ={
    id: 2,
    title: 'Grandes cecuoyas',
    orientation:PhotoOrientation.Landscape
};

let newPicture = {} as Picture; 

newPicture.id=2;
newPicture.title='Moon';
//newPicture.orientation=PhotoOrientation.Panorama;


console.log('album',album);
console.log('newPicture',newPicture);
console.log('picture',picture);

