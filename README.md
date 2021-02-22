# Instalacion
- Elige una carpeta vacia
- Abre la consola
- Ejecuta ```npm i react-lite-app```
> No debes instalar esto de forma global, ya que el proyecto generado se crea donde tu instales el modulo

# Crear la app
- Ejecuta en la misma carpeta donde instalaste el modulo ```npx react-lite-app```
- Si deseas crear la version basada en EsBuild ejecuta el comando ```npx react-lite-app-esbuild```
> Veras una carpeta llamada ```/react-lite-app``` o  ```/react-lite-app-vesbuild```, en esta carpeta se encuentra tu proyecto de React creado y listo para usar.

> El modulo es de un solo uso, lo que significa que es tan limpio que no quedan instalaciones innecesarias. Ni siquiera el mismo modulo, solo tu proyecto nuevo :)

# Trick :)
El modulo se auto destruye para solo dejar tu proyecto creado y listo :) por lo tanto puedess hacer lo siguiente cada que lo uses:
- Ejecuta ```npm i react-lite-app && npx react-lite-app``` para la version WebPack y Babel
- Ejecuta ```npm i react-lite-app && npx react-lite-app-esbuild``` para la version EsBuild

> De esta manera solo necesitaras una linea para poder usarlo y listo podras usarlo

# Correr en modo desarrollo
```npm start```
> En la carpeta ```/public``` tienes lo que podras modificar sin afectar tu carpeta de produccion ```/build```

# En la version EsBuild si tienes algun problema en su lugar puedes ejecutar:
```npm run power | npm run server```

# Generar el build para produccion
```npm run build```
> En la carpeta ```/build``` tienes lo que podras subir a tu server

# Soporte
Ya que se trata de una version limpia por defecto soporta archivos: jsx, js, css, png, jpg, svg y gif ademas de soportar React-Router-Dom

# Agradecimientos (Webpack Version)
- [D3Portillo](https://github.com/D3Portillo)
- [DannyBeltran](https://github.com/danybeltran/)
