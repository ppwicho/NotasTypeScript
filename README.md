# NotasTypeScript
Mis notas de TypeScript

Utilizamos el paquete nvm para tener varias versiones de npm 

`nvm --list` 

`nvm  -v` 

`nvm use` (Se recomienda LTS) 

`npm install -g typescript`

# Consola

`tsc hello.ts`  // compila a js

`node hello.js` // corre javascript en cosola con node

`tsc --watch` // visualiza y compila en tiempo real

`tsc --init` // crea el archivo tsconfig.json 

En `TSCONFIG` podemos definir cosas increibles como 

```extends

compileOnSave

include 

exclude 

removeComments // para quitar los comentarios del compilado 

```

# Tipeado en TypeScript: Variables Explicitas y Variables Implicitas 

Ver src/main.js
 

 # Variables Any, Void , null y undefined

Ver src/

# Array en TypeScript 

Usa dos notaciones: [] y Array<tipo>


# Tuple 

Permiten expresar un arreglo con número fijo de elementos 

Los tipos de datos son conocidos (diferentes)


# Para trabajar con proyectos inmersos

`tsc --project photo-app --watch` 

# Estrategias de resolución de modulos 

`tsc --moduleResolution node` -- Más opciones de configuración

Modulos CommonJS o UMD  


`tsc --moduleResolution classic` -- Poco configurable

Módulos AMD, System, ES2015 

### tsconfig.json 

- `moduleResolution: "node" or "classic"`

-  `traceResolution: "true"`  Nos da debug de la resolucion de modulos en node. 

### Node:Import Relativo 

`import {Picture} from './picture' ` 

- busca picture.ts 
- busca picture.tsx
- busca picture.d.ts 
- busca package.json ("typings") 
- busca index.ts 
- busca index.tsx
- busca index.d.ts


### Node:Import No Relativo 

`import {Picture} from 'picture' ` 

- busca picture.ts 
- busca picture.tsx
- busca picture.d.ts 
- busca package.json ("typings") 
- busca index.ts 
- Sube un directorio ../ busca lo mismo. 


### Classic: Import Relativo 

`import {Picture} from './picture' ` 

- busca picture.ts 
-  busca picture.d.ts 

### Clasic: Import No-Relativo 

`import {Picture} from 'picture' ` 

- busca picture.ts 
- busca picture.d.ts 
- sube un directorio dentro de la estructura y busca
- busca picture.ts 
- busca picture.d.ts 
- sube un directorio dentro de la estructura y busca
- ... 

# Webpack 

Para crear el package.json

`npm init -y`


`npm install typescript webpack webpack-cli --save-dev `

--save-dev nos guarda dependencias persistente en package.json 

Crear archivo webpack.config.js

Para que webpack lea typescript: 

`npm install ts-loader --save-dev ` 

en webpack.config 

```
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }


```

`npm run build`

Para correr el codigo 

`node dist/bundle.js`


# Pero las mejores notas las encuentras en 

https://www.notion.so/Curso-de-fundamentos-de-TypeScript-b86f48d1310746a182d6de6a343f685c#21d39d1363ac41dea41a2c05794ea595


