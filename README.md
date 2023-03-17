# Search-GifApp

Repositorio del proyecto Search-GifApp de React, que  realiza la búsqueda de gifs en base a una palabra clave.

## Pasos para utilizar el proyecto
1. Clonar el repositorio.
2. Instalar los módulos de node: 
```
yarn install
```
3. Generar una __api_key__ en el sitio: 
```
https://developers.giphy.com
```
4. Ejecutar la apliación en modo de desarrollo:
```
yarn dev
```
## Instalaciones para pruebas unitarias con Jest

1. Instalar: 
```
yarn add --dev jest babel-jest  @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```
```
yarn add --dev @testing-library/react @types/jest jest-environment-jsdom ts-jest
```
2. Opcional: Si se usa Fetch API en el proyecto:
```
yarn add --dev whatwg-fetch
```

3. Agregar en el __package.json__, en __scripts__: 
```
"scripts": {
    ....
    "test": "jest --watchAll"
  }
```

4. Crear el archivo __babel.config.cjs__ en la raíz del proyecto y agregar la siguiente configuración: 
```
module.exports = {
    presets: [
      ['@babel/preset-env', {targets: { esmodules: true }}],
      ['@babel/preset-react', {runtime: 'automatic'}],
      '@babel/preset-typescript',
    ],
  };
```
5. Crear el archivo __jest.config.cjs__ en la raíz del proyecto y agregar la siguiente configuración: 
```
module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFiles: ['./jest.setup.ts']
}
```

6. Crear el archivo __jest.setup.ts__ y agregar: 
```
import 'whatwg-fetch';
```

7. En la terminal, dentro de la carpeta del proyecto, iniciar el testing con: 
```
yarn test
```



