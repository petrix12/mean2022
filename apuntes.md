# [2022] MEAN Stack: Master NodeJS y Angular
+ [URL del curso en Udemy](https://www.udemy.com/course/master-deno-angular)
+ [URL del repositorio en GitHub](https://github.com/petrix12/mean2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **mean2022**.
    + **Description**: Proyecto para seguir el curso de "[2022] MEAN Stack: Master NodeJS y Angular", creado por Vaxi Drez en Udemy.
    + **Public**.
2. En la ubicación raíz del proyecto en la terminal de la máquina local:
    + $ git init
    + $ git add .
    + $ git commit -m "Antes de iniciar"
    + $ git branch -M main
    + $ git remote add origin https://github.com/petrix12/mean2022.git
    + $ git push -u origin main


## Sección 1: Instalar Herramientas
### 1. Instalar Visual Studio Code
1. Instalar [Visual Studio Code](https://code.visualstudio.com).


## Sección 2: Servidor Backend - Básico
### 2. Instalacion de NodeJS
1. Instalar [NodeJS](https://nodejs.org).

### 3. Instalar extensiones
1. Extensiones de VSCode requeridas:
    + angular2-inline
        + v0.0.17
        + Nate Wallace
    + Angular Language Service
        + v13.3.0
        + Angular
    + [Deprecated] Debugger for Chrome
        + v4.13.0
        + Microsoft
    + Angular Snippets (Version 13)
        + v13.0.0
        + John Papa
    + EditorConfig for VS Code
        + v0.16.4
        + EditorConfig
    + Material Icon Theme
        + v4.14.1
        + Philipp Kief
    + Prettier - Code formatter
        + v9.3.0
        + Prettier
    + TSLint
        + v1.3.3
        + Microsoft
    + JavaScript (ES6) code snippets
        + v1.8.0
        + charalampos karypidis
    + ExpressSnippet
        + v0.2.4
        + vladmrnv

### 4. Instalacion de Postman
1. Instalar [Postman](https://www.postman.com)

### 5. Backend y Frontend - Creacion de Servidor NodeJS
+ **Contenido**: cumunicación entre el Backend y el Frontend.
1. Crear carpeta **servidor** para iniciar un nuevo proyecto.
2. Crear archivo de configuración del servidor **servidor\server.js**:    
    ```js
    const http = require('http')

    const server = http.createServer((request, response) => {
        console.log(request)
        response.end()
    })

    const PORT = 5000

    server.listen(PORT, ()  => console.log('Servidor levantado'))
    ```
3. Levantar el nuevo servidor:
    + $ cd servidor
    + $ node server.js
4. Realizar petición http:
    + Método: GET
    + URL: localhost:5000

### 6. Instalar nodemon
1. Crear archivo de dependencias del proyecto **servidor**:
    + $ npm init
    + package name: (servidor): Presionar ENTER para que tome el nombre de la carpeta del proyecto.
    + version: (1.0.0): ENTER
    + description: Proyecto servidor
    + entry point: (server.js): ENTER
    + test command: ENTER
    + git repository: ENTER
    + keywords: ENTER
    + author: ENTER
    + license: (ISC) ENTER
    + Is this OK? (yes) ENTER
2. Instalar la dependencia de Nodemon en modo de desarrollo:
    + $ npm install --save-dev nodemon
3. Modificar **servidor\package.json**:    
    ```json
    ≡
    "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1",
        "start": "nodemon server.js"
    },
    ≡
    ```
4. Ejecutar el proyecto **servidor**:
    + $ npm start
5. Modificar **servidor\server.js**:
    ```js
    ≡
    const server = http.createServer((request, response) => {
        const { headers, url, method } = request
        console.log(headers, url, method)
        response.end()
    })
    ≡
    ```
6. Realizar petición http:
    + Método: GET
    + URL: localhost:5000

### 7. Enviar data al cliente










    ```js
    ≡
    ≡
    ```


### 8. Enviar request desde un cliente
12 min
### 9. Metodos request
15 min


## Sección 3: Creación de Backend para MEAN
### 10. Creacion de proyecto NodeJS
19 min
### 11. Creacion de metodos con express
9 min
### 12. Rutas en NodeJS
8 min
### 13. Controllers en NodeJS
13 min
### 14. NodeJS y Middleware
7 min
### 15. MongoDB NoSQL
4 min
### 16. Instalar Base de Datos MongoDB
10 min
### 17. Conexion entre NodeJS y MongoDB
15 min
### 18. Creacion de Modelo Schema en Mongoose
5 min
### 19. Creacion de collections en MongoDB
17 min
### 20. Metodos GET
7 min
### 21. Metodos PUT, Delete en NodeJS y Mongoose
8 min
### 22. Middleware para manejo de errores
10 min
### 23. Error personalizado en NodeJS
7 min
### 24. Ajustes en Middleware
4 min
### 25. Mantenimiento de Libros
22 min
### 26. Que es Paginacion?
6 min
### 27. Paginacion con NodeJS y MongoDB
24 min
### 28. Configuracion de Cors en NodeJS
1 min
### 29. Web Arquitectura MVC y SPA
2 min
### 30. Angular Framework
2 min
### 31. Instalar Visual Studio Code
2 min
### 32. Instalar Extensiones
3 min
### 33. Instalacion de NodeJS
2 min
34. Creacion de Proyecto Angular
4 min
### 35. Configuracion de Angular
1 min
### 36. Estructura de un proyecto Angular
7 min
### 37. Ejecutar Proyecto Angular
15 min
### 38. Comunicacion entre Javascript y Html en Angular
4 min
### 39. Como trabajan los IF y For en Angular?
10 min
### 40. Comunicacion entre componentes Angular
19 min
### 41. Trabajando la comunicacion con mensajes en Angular
12 min
### 42. Formularios en Angular
13 min
### 43. Servicios en Angular
15 min
### 44. Subject y Services en Angular
15 min
### 45. Eliminar Items con Subject
6 min
### 46. Routing en Angular
13 min
### 47. Angular Material y Material Design
2 min
### 48. Agregar Material Design a mi proyecto Angular
7 min
### 49. Agregar Componente Angular Material
11 min
### 50. Estructura del Proyecto
9 min
### 51. Crear Formulario con Angular y Material Design
7 min
### 52. Flex en Angular
13 min
### 53. Flex en Formularios
5 min
### 54. Agregar boton submit a Form
6 min
### 55. Validaciones en Angular
10 min
### 56. Implementar validaciones en evento submit
8 min
### 57. Agregar SideNavBar Componente
10 min
### 58. Toolbar en nuestra App
7 min
### 59. Agregar estilos al toolbar
10 min
### 60. Angular responsive
5 min
### 61. Agregar Menu a la barra de navegacion
11 min
### 62. Creacion de componente barra de menu
18 min
### 63. Creacion de Formulario Login
9 min
### 64. Crear Interface y Servicio de Seguridad
11 min
### 65. Implementando seguridad en Angular
10 min
### 66. Manejo de Menu con Sesion
15 min
### 67. Manejo de Salir Sesion
16 min
### 68. Seguridad en componentes Angular
12 min
### 69. Crear Libro Service
6 min
### 70. Agregar Servicio Book
6 min
### 71. Agregar Material Table
18 min
### 72. Ordenamiento en Tabla
5 min
### 73. Filtros en Tabla
5 min
### 74. Paginacion en Tabla
6 min
### 75. Boton flotante
3 min
### 76. Crear Material Dialog
11 min
### 77. Crear Formulario Nuevo
18 min
### 78. Control Datepicker
11 min
### 79. Guardar elemento en Angular
19 min
### 80. Validacion de Formulario
3 min
### 81. Crear Tabla para Listar Autores
19 min
### 82. Agregar Select - Combobox
7 min
### 83. Definicion de Url Base en Angular
1 min
### 84. Consultar data desde el servidor backend en Angular
16 min
### 85. Agregar ngOndestroy
3 min
### 86. Paginacion: Logica en Angular Services
15 min
### 87. Paginacion: Componente Angular
14 min
### 88. Modelo para insertar nuevos registros con Angular
12 min
### 89. Insertar nuevos registros con Angular y NodeJS
14 min
### 90. Paginacion: Ordenar de forma ASC/DESC
10 min
### 91. Paginacion: Busquedas con filtros
13 min
### 92. Seguridad en NodeJS
8 min
### 93. Creacion de Controllers y Rutas
8 min
### 94. Registrar Nuevos Usuarios
12 min
### 95. Encriptar password
7 min
### 96. Crear JsonWebToken
14 min
### 97. Login en NodeJS
16 min
### 98. Middleware de seguridad
14 min
### 99. Implementar seguridad en Rutas y Controllers
11 min
### 100. Seguridad en Componentes Angular
9 min
### 101. Interceptor Http en Angular para JWT
22 min
### 102. Seguridad en JWT y Sesion de Usuarios
16 min
### 103. Registrar Nuevos Usuarios
