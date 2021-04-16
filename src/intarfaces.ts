// Funcion para mostrar una foto

export{};

enum PhotoOrientation {
    Landscape, //0 
    Portait, //1
    Square, //2
    Panorama //3
}

interface Picture{
    title: string,
    date: string,
    orientation: PhotoOrientation
}

function showPicture(picture: Picture){
    console.log(`
    [title: ${picture.title}
    date: ${picture.date},
    orientation: ${picture.orientation}
    ]`)
}

let myPic={
    title:'test',
    date:'20202',
    orientation: PhotoOrientation.Landscape
}

showPicture(myPic);

showPicture({
    title:'Test Title',
    date: '20202-03',
    orientation: PhotoOrientation.Panorama
});

// Atributos adicionales en tS 


interface PictureConfig{
    title?: string,
    date?: string,
    orientation?: PhotoOrientation
}

function generatePicture(config:PictureConfig){
    const pic={title: 'Default', date:'No Date'}
    if(config.title){
        pic.title=config.title;
    }
    if(config.date){
        pic.date=config.date; 
    }
    return pic;
}

let picture = generatePicture({}); // Acepta la invocacion al usar ? en la interfaz
console.log(picture);

// Propiedades opcionales 

interface User{
    readonly id:number; //solo lectura
    username: string;
    isPro:boolean;
}

let user:User;

user={id:10,username:'ppwicho',isPro:true};

try{
    user.id=20; // Error
    console.log(user.id);
}catch{
    console.log(user.id,'Error usuario');
}


