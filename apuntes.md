# [2022] MEAN Stack: Master NodeJS y Angular
+ [URL del curso en Udemy](https://www.udemy.com/course/master-deno-angular)
+ [URL del repositorio en GitHub](https://github.com/petrix12/mean2022.git)


## Antes de iniciar:
1. Crear proyecto en la página de [GitHub](https://github.com) con el nombre: **mean2022**.
    + **Description**: Proyecto para seguir el curso de "[2022] MEAN Stack: Master NodeJS y Angular", creado por Vaxi Drez Arcila en Udemy.
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
1. Modificar **servidor\server.js**:
    ```js
    ≡
    const libros = [
        {
            'titulo': 'Libro de programaciónn',
            'autor': 'Pedro Bazó'
        },
        {
            'titulo': 'El Señor de los anillos',
            'autor': 'J. R. Tolkien'
        }
    ]

    const server = http.createServer((request, response) => {
        /* response.setHeader('Content-Type', 'text/plain') */
        /* response.setHeader('Content-Type', 'text/html') */
        response.setHeader('Content-Type', 'application/json')
        /* response.write('<h1>Soluciones++</h1>') */
        response.end(
            JSON.stringify(
                {
                    data: libros
                }
            )
        )
    })
    ≡
    ```

### 8. Enviar request desde un cliente
+ **Documentación**: https://developer.mozilla.org/es/docs/Web/HTTP/Status
1. Códigos de estado de respuesta HTTP:
    + Respuestas informativas (100–199),
    + Respuestas satisfactorias (200–299),
    + Redirecciones (300–399),
    + Errores de los clientes (400–499),
y errores de los servidores (500–599).
2. Modificar **servidor\server.js**:
    ```js
    ≡
    const server = http.createServer((request, response) => {
        /* response.statusCode = 404
        response.setHeader('Content-Type', 'application/json') */
        // Equivalente a las dos líneas comentadas anteriormente
        response.writeHead(200, {
            'Content-Type': 'application/json'
        })
        /* console.log(request.headers.authorization) */

        let body = []
        request.on('data', dataCliente => {
            body.push(dataCliente)
        })
        .on('end', () => {
            body = Buffer.concat(body).toString()
            console.log(body);
        })

        response.end(
            JSON.stringify(
                {
                    data: libros
                }
            )
        )
    })
    ≡
    ```
3. Realizar petición http:
    + Método: GET
    + URL: localhost:5000
    + Header:
        ```json
        {
            "Authorization": "12312312312312312"
        }
        ```
    + Body:
        ```json
        {
            "nombres": "Vaxi Drez",
            "apellidos": "Arcila"
        }
        ```
        + **Nota**: en Postman para escribir en JSON en el body seleccionar **raw** y luego indicar el formato **JSON**.

### 9. Metodos request
+ **Documentación**: https://developer.mozilla.org/es/docs/Web/HTTP/methods
1. Métodos de petición HTTP:
    + **GET**: El método GET solicita una representación de un recurso específico. Las peticiones que usan el método GET sólo deben recuperar datos.
    + **HEAD**: El método HEAD pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta.
    + **POST**: El método POST se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor.
    + **PUT**: El modo PUT reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición.
    + **DELETE**: El método DELETE borra un recurso en específico.
    + **CONNECT**: El método CONNECT establece un túnel hacia el servidor identificado por el recurso.
    + **OPTIONS**: El método OPTIONS es utilizado para describir las opciones de comunicación para el recurso de destino.
    + **TRACE**: El método TRACE realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino.
    + **PATCH**: El método PATCH es utilizado para aplicar modificaciones parciales a un recurso.
2. Modificar **servidor\server.js**:
    ```js
    ≡
    const server = http.createServer((request, response) => {
        const { method, url } = request

        let body = []

        request.on('data', dataCliente => {
            body.push(dataCliente)
        })
        .on('end', () => {
            body = Buffer.concat(body).toString()
            let status = 404
            const res = {
                status: 404,
                data: null
            }

            if(method === 'GET' && '/libros') {
                status = 200
                res.status = 200
                res.data = libros
            } else if(method === 'POST' && '/libros') {
                status = 200
                const { titulo, autor } = JSON.parse(body)
                libros.push({ titulo, autor })
                res.status = 200
                res.data = libros
            }

            response.writeHead(status, {
                'Content-Type': 'application/json'
            })

            response.end(
                JSON.stringify(res)
            )
        })
    })
    ≡
    ```
3. Realizar petición http:
    + Método: GET
    + URL: localhost:5000
4. Realizar petición http:
    + Método: GET
    + URL: localhost:5000/libros
5. Realizar petición http:
    + Método: POST
    + URL: localhost:5000/libros
    + Body:
        ```json
        {
            "titulo": "VBA",
            "autor": "Carlos Sánchez"
        }
        ```
        + **Nota**: en Postman para escribir en JSON en el body seleccionar **raw** y luego indicar el formato **JSON**.


## Sección 3: Creación de Backend para MEAN
### 10. Creacion de proyecto NodeJS
1. Crear carpeta **BackendNode** para un nuevo proyecto en NodeJS.
2. Crear archivo de configuración del proyecto **BackendNode**:
    + $ npm init
    + package name: (servidor): Presionar ENTER para que tome el nombre de la carpeta del proyecto.
    + version: (1.0.0): ENTER
    + description: Proyecto de administración de librerias
    + entry point: (index.js): server.js
    + test command: ENTER
    + git repository: ENTER
    + keywords: ENTER
    + author: Pedro Bazó
    + license: (ISC) ENTER
    + Is this OK? (yes) ENTER
3. Instalar las dependencias de express y dotenv:
    + $ npm install express dotenv
4. Instalar la dependencia de nodemon para el modo desarrollo unicamente:
    + $ npm install -D nodemon
5. Modificar **BackendNode\package.json**:
    ```json
    ≡
    "scripts": {
        "start": "NODE_ENV=production node server",
        "dev": "nodemon server"
    },
    ≡
    ```
6. Crear archivo de configuración del proyecto **BackendNode\config\config.env**:
    ```env
    NODE_ENV=development
    PORT=5000
    ```
7. Crear archivo de configuración del servidor **BackendNode\server.js**:
    ```js
    const dotenv = require('dotenv')
    const express = require('express')

    dotenv.config({
        path: './config/config.env'
    })

    const app = express()

    const PORT = process.env.PORT || 5000

    app.listen(PORT, console.log('Servidor se ejecuta en ambiente', process.env.NODE_ENV))
    ```
8. Ejecutar proyecto en modo desarrollo:
    + $ npm run dev
9. Modificar nuevamente **BackendNode\package.json** para que el modo producción se ejecute en Windows y no en Linux:
    ```js
    ≡
    "scripts": {
        "start": "SET NODE_ENV=production & node server",
        "dev": "nodemon server"
    },
        ≡
    ```
10. Detener ejecución del proyecto (Ctrl + C) y ejecutar en modo producción:
    + $ npm start
11. Regresar nuevamente a la configuración anterior de **BackendNode\package.json**.

### 11. Creacion de metodos con express
1. Modificar **BackendNode\server.js**:
    ```js
    ≡
    const app = express()

    app.get('/api/libro', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para obtener todos lo libros'})
    })

    app.get('/api/libro/:id', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para obtener el libro con id'})
    })

    app.post('/api/libro', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para ingresar un libro'})
    })

    app.put('/api/libro/:id', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para actualizar el libro con id'})
    })

    app.delete('/api/libro/:id', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para eliminar el libro con id'})
    })
    ≡
    ```
2. Realizar petición http:
    + Método: GET
    + URL: localhost:5000/api/libro
3. Realizar petición http:
    + Método: GET
    + URL: localhost:5000/api/libro/777
4. Realizar petición http:
    + Método: POST
    + URL: localhost:5000/api/libro
5. Realizar petición http:
    + Método: PUT
    + URL: localhost:5000/api/libro/888
6. Realizar petición http:
    + Método: DELETE
    + URL: localhost:5000/api/libro/999

### 12. Rutas en NodeJS
1. Crear archivo de rutas para la entidad **libro** (**BackendNode\rutas\libro.js**):
    ```js
    const express = require('express')
    const ruta = express.Router()

    ruta.get('/', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para obtener todos lo libros'})
    })

    ruta.get('/:id', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para obtener el libro con id'})
    })

    ruta.post('/', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para ingresar un libro'})
    })

    ruta.put('/:id', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para actualizar el libro con id'})
    })

    ruta.delete('/:id', (req, res) => {
        res.status(200).json({ status: 200, mensaje: 'API para eliminar el libro con id'})
    })

    module.exports = ruta
    ```
2. Modificar **BackendNode\server.js**:
    ```js
    const dotenv = require('dotenv')
    const express = require('express')
    const libro = require('./rutas/libro')

    dotenv.config({
        path: './config/config.env'
    })

    const app = express()

    app.use('/api/libro', libro)

    const PORT = process.env.PORT || 5000

    app.listen(PORT, console.log('Servidor se ejecuta en ambiente', process.env.NODE_ENV))
    ```
3. Volver a realizar las peticiones http del apartado anterior.

### 13. Controllers en NodeJS
1. Crear controlador **BackendNode\controllers\libro.js**:
    ```js
    exports.getLibros = (req, res, next) => {
        res.status(200).json({ status: 200, mensaje: 'API para obtener todos lo libros'})
    }

    exports.getLibro = (req, res, next) => {
        res.status(200).json({ status: 200, mensaje: 'API para obtener el libro con id'})
    }

    exports.crearLibro = (req, res, next) => {
        res.status(200).json({ status: 200, mensaje: 'API para ingresar un libro'})
    }

    exports.actualizarLibro = (req, res, next) => {
        res.status(200).json({ status: 200, mensaje: 'API para actualizar el libro con id'})
    }

    exports.eliminarLibro = (req, res, next) => {
        res.status(200).json({ status: 200, mensaje: 'API para eliminar el libro con id'})
    }
    ```
2. Modificar ruta **BackendNode\rutas\libro.js**:
    ```js
    const express = require('express')
    const ruta = express.Router()
    const { 
        getLibros, 
        getLibro, 
        crearLibro, 
        actualizarLibro, 
        eliminarLibro 
    } = require('../controllers/libro')

    ruta
        .route('/')
        .get(getLibros)
        .post(crearLibro)

    ruta
        .route('/:id')
        .get(getLibro)
        .put(actualizarLibro)
        .delete(eliminarLibro)

    module.exports = ruta
    ```
3. Volver a realizar las peticiones http del apartado anterior.

### 14. NodeJS y Middleware
1. Modificar archivo de configuración **BackendNode\server.js**:
    ```js
    const dotenv = require('dotenv')
    const express = require('express')
    const morgan = require('morgan')
    const libro = require('./rutas/libro')

    dotenv.config({
        path: './config/config.env'
    })

    const app = express()

    if(process.env.NODE_ENV === 'development'){
        /* const loger = (req, res, next) => {
            console.log('Request interceptado por el middleware')
            next()
        }
        app.use(loger) */
        app.use(morgan('dev'))
    }

    app.use('/api/libro', libro)

    const PORT = process.env.PORT || 5000

    app.listen(PORT, console.log('Servidor se ejecuta en ambiente', process.env.NODE_ENV))
    ```
2. Detener el servidor (Ctrl + C) e instalar la dependencia morgan:
    + $ npm install morgan
3. Levantar nuevamente el servidor y realizar las peticiones del apartado anterior.


## Sección 4: Crear basede datos MongoDB
### 15. MongoDB NoSQL
+ **Contenido**: sobre MongoDB.

### 16. Instalar Base de Datos MongoDB
1. Ingresar a la página de [MongoDB](https://www.mongodb.com) e iniciar sesión.
2. Crear un nuevo usuario en **Database Access** y darle privilegio de leer y escribir para todas las bases de datos.
3. En **Network Access** dar click en **ADD IP ADDRESS** y permitir que cualquier IP tenga acceso a nuestra base de datos en **ALLOW ACCESS FROM ANYWHERE**.
4. En **Database** o **Clusters** ir a **Connect** y dar click en **Connect using MongoDB Compass**.
5. Instalar **MongoDB Compass**.

### 17. Conexion entre NodeJS y MongoDB
1. Abrir el proyecto **BackendNode** e instalar mongoose:
    + $ npm install mongoose
2. Crear archivo de configuración de base de datos **BackendNode\config\db.js**:
    ```js
    const mongoose = require('mongoose')

    const connectDatabase = async () => {
        const conexion = await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            /* useCreateIndex: true, */
            /* useFindAndModify: false, */
            useUnifiedTopology: true
        })

        console.log('MongoDB Servidor Atlas conectado', conexion.connection.host)
    }

    module.exports = connectDatabase
    ```
3. Modificar archivo de variables de entorno **BackendNode\config\config.env**:
    ```env
    ≡
    MONGO_URI=mongodb+srv://petrix:<password>@cluster0.hrqzg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
    ```
    + **Nota**: obtener cadena de conexión de [MongoDB](https://www.mongodb.com).
        + Reemplazar **<password>** por el password de la base de datos.
        + Reemplazar **myFirstDatabase** por el nombre que se le desea dar a la base de datos.
4. Modificar **BackendNode\server.js**:
    ```js
    const dotenv = require('dotenv')
    const express = require('express')
    const morgan = require('morgan')
    const connectDatabase = require('./config/db')

    dotenv.config({ path: './config/config.env' })
    connectDatabase()

    const libro = require('./rutas/libro')

    const app = express()

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'))
    }

    app.use('/api/libro', libro)

    const PORT = process.env.PORT || 5000

    const server = app.listen(
        PORT, 
        console.log('Servidor se ejecuta en ambiente', process.env.NODE_ENV
    ))

    process.on('unhandledRejection', (err, promise) => {
        console.log('Errores', err.message)
        server.close(() => process.exit(1))
    })
    ```
5. Levantar el servidor **BackendNode**:
    + $ npm run dev

### 18. Creacion de Modelo Schema en Mongoose
1. Crear modelo **BackendNode\models\Autor.js**:
    ```js
    const mongoose = require('mongoose')

    const AutorSchema = new mongoose.Schema({
        nombre: String,
        apellido: String,
        gradoAcademico: String,
        nombreCompleto: String
    })

    module.exports = mongoose.model('Autor', AutorSchema)
    ```

### 19. Creacion de collections en MongoDB
1. Crear controlador **BackendNode\controllers\autor.js**:
    ```js
    const Autor = require('../models/Autor')

    exports.crearAutor = async (req, res, next) => {
        try {
            const autorData = await Autor.create(req.body)
            res.status(200).json({
                status: 200,
                data: autorData
            })
        } catch (err) {
            res.status(400).json({status: 400, mensaje: err})
        }
    }
    ```
2. Crear archivo de rutas **BackendNode\rutas\autor.js**:
    ```js
    const {
        Router
    } = require('express')
    const express = require('express')
    const ruta = express.Router()

    const {
        crearAutor
    } = require('../controllers/autor')

    ruta
        .route('/')
        .post(crearAutor)

    module.exports = ruta
    ```
3. Modificar **BackendNode\server.js**:
    ```js
    ≡
    const libro = require('./rutas/libro')
    const autor = require('./rutas/autor')

    const app = express()
    app.use(express.json())

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'))
    }

    app.use('/api/libreriaautor', autor)
    app.use('/api/libro', libro)
    ≡
    ```
4. Realizar petición http:
    + Método: POST
    + URL: localhost:5000/api/libreriaautor
    + Body:
        ```json
        {
            "nombre": "Pedro",
            "apellido": "Bazó",
            "gradoAcademico": "Ingeniero Químico"
        }
        ```

### 20. Metodos GET
1. Modificar el controlador **BackendNode\controllers\autor.js**:
    ```js
    ≡
    exports.getAutor = async (req, res, next) => {
        try {
            const autorLista = await Autor.find()
            res.status(200).json(autorLista)
        } catch (err) {
            res.status(400).json({status: 400, mensaje: err})
        }
    }

    exports.getAutorById = async (req, res, next) => {
        try {
            const autor = await Autor.findById(req.params.id)
            res.status(200).json(autor)
        } catch (err) {
            res.status(400).json({status: 400, mensaje: err})
        }
    }
    ```
2. Modificar archivo de rutas **BackendNode\rutas\autor.js**:
    ```js
    const {
        Router
    } = require('express')
    const express = require('express')
    const ruta = express.Router()

    const {
        crearAutor,
        getAutor,
        getAutorById
    } = require('../controllers/autor')

    ruta
        .route('/')
        .post(crearAutor)
        .get(getAutor)

    ruta
        .route('/:id')
        .get(getAutorById)

    module.exports = ruta
    ```
3. Realizar petición http:
    + Método: POST
    + URL: localhost:5000/api/libreriaautor
    + Body:
        ```json
        {
            "nombre": "José",
            "apellido": "González",
            "gradoAcademico": "Educador"
        }
        ```
4. Realizar petición http:
    + Método: POST
    + URL: localhost:5000/api/libreriaautor
    + Body:
        ```json
        {
            "nombre": "Jhon",
            "apellido": "Ortiz",
            "gradoAcademico": "Abogado"
        }
        ```
5. Realizar petición http:
    + Método: GET
    + URL: localhost:5000/api/libreriaautor
6. Realizar petición http:
    + Método: GET
    + URL: localhost:5000/api/libreriaautor/623694b3b1a28d80dedf6335

### 21. Metodos PUT, Delete en NodeJS y Mongoose
1. Modificar el controlador **BackendNode\controllers\autor.js**:
    ```js
    ≡
    exports.updateAutor = async (req, res, next) => {
        try {
            const autor = await Autor.findByIdAndUpdate(req.params.id, req.body)
            if(!autor){
                return res.status(400).json({status: 400})
            }
            res.status(200).json({ status: 200, data: autor})
        } catch (err) {
            res.status(400).json({status: 400, mensaje: err})
        }
    }

    exports.deleteAutor = async (req, res, next) => {
        try {
            const autor = await Autor.findByIdAndDelete(req.params.id)
            if(!autor){
                return res.status(400).json({status: 400})
            }
            res.status(200).json({ status: 200 })
        } catch (err) {
            res.status(400).json({status: 400, mensaje: err})
        }
    }
    ```
2. Modificar archivo de rutas **BackendNode\rutas\autor.js**:
    ```js
    ≡
    const {
        crearAutor,
        getAutor,
        getAutorById,
        updateAutor,
        deleteAutor
    } = require('../controllers/autor')

    ruta
        .route('/')
        .post(crearAutor)
        .get(getAutor)

    ruta
        .route('/:id')
        .get(getAutorById)
        .put(updateAutor)
        .delete(deleteAutor)
    ≡
    ```
3. Realizar petición http:
    + Método: PUT
    + URL: localhost:5000/api/libreriaautor/updateAutor/623694b3b1a28d80dedf6335
    + Body:
        ```json
        {
            "nombre": "Vicente",
            "apellido": "Melendez",
            "gradoAcademico": "Master"
        }
        ```
4. Realizar petición http:
    + Método: GET
    + URL: localhost:5000/api/libreriaautor/623694b3b1a28d80dedf6335
5. Realizar petición http:
    + Método: DELETE
    + URL: localhost:5000/api/libreriaautor/623694b3b1a28d80dedf6335
6. Realizar petición http:
    + Método: GET
    + URL: localhost:5000/api/libreriaautor


## Sección 5: Middleware en NodeJS
### 22. Middleware para manejo de errores
1. Modificar controlador **BackendNode\controllers\autor.js**:
    ```js
    ≡
    exports.getAutorById = async (req, res, next) => {
        try {
            const autor = await Autor.findById(req.params.id)
            res.status(200).json(autor)
        } catch (err) {
            next(err)
            /* res.status(400).json({status: 400, mensaje: err}) */
        }
    }
    ≡
    ```
2. Crear middleware **BackendNode\middleware\error.js**:
    ```js
    const errorHandler = (err, req, res, next) => {
        console.log('Errores en mi controller', err)
        res.status(500).json({ status:500, mensaje: err.message })
    }

    module.exports = errorHandler
    ```
3. Modificar **BackendNode\server.js**:
    ```js
    ≡
    const errorHandler = require('./middleware/error')
    const connectDatabase = require('./config/db')
    ≡
    app.use('/api/libreriaautor', autor)
    app.use('/api/libro', libro)

    app.use(errorHandler)
    ≡
    ```

### 23. Error personalizado en NodeJS
1. Crear helper **BackendNode\helper\errorResponse.js**:
    ```js
    class ErrorResponse extends Error{
        constructor(mensaje, statusCode){
            super(mensaje)
            this.statusCode = statusCode
        }
    }

    module.exports = ErrorResponse
    ```
2. Modificar controlador **BackendNode\controllers\autor.js**:
    ```js
    const ErrorResponse = require('../helper/errorResponse')
    ≡
    exports.getAutorById = async (req, res, next) => {
        try {
            const autor = await Autor.findById(req.params.id)
            if(!autor){
                return next(new ErrorResponse('El autor no existe en la bd con este id ' + req.params.id, 404))
            }
            res.status(200).json(autor)
        } catch (err) {
            next(new ErrorResponse('El autor no existe con este id ' + req.params.id, 404))
        }
    }
    ≡
    ```

### 24. Ajustes en Middleware
1. Modificar controlador **BackendNode\controllers\autor.js**:
    ```js
    ≡
    exports.crearAutor = async (req, res, next) => {
        try {
            ≡
        } catch (err) {
            next(new ErrorResponse('No es posible crear el autor ' + err.message, 404))
        }
    }

    exports.getAutor = async (req, res, next) => {
        try {
            ≡
        } catch (err) {
            next(new ErrorResponse('No se pudo procesar el request ' + err.message, 404))
        }
    }

    exports.getAutorById = async (req, res, next) => {
        ≡
    }

    exports.updateAutor = async (req, res, next) => {
        try {
            const autor = await Autor.findByIdAndUpdate(req.params.id, req.body)
            if(!autor){
                return next(new ErrorResponse('El autor no existe en la bd con este id ' + req.params.id, 404))
            }
            res.status(200).json({ status: 200, data: autor})
        } catch (err) {
            next(new ErrorResponse('El autor no existe con este id ' + req.params.id, 404))
        }
    }

    exports.deleteAutor = async (req, res, next) => {
        try {
            const autor = await Autor.findByIdAndDelete(req.params.id)
            if(!autor){
                return next(new ErrorResponse('El autor no existe en la bd con este id ' + req.params.id, 404))
            }
            res.status(200).json({ status: 200 })
        } catch (err) {
            next(new ErrorResponse('El autor no existe con este id ' + req.params.id, 404))
        }
    }
    ```

### 25. Mantenimiento de Libros
1. Crear modelo **BackendNode\models\Libro.js**:
    ```js
    const mongoose = require('mongoose')

    const LibroSchema = new mongoose.Schema({
        titulo: {
            required: [true, 'Ingrese un título de libro'],
            maxlength: [500, 'El título de libro no puede ser mayor de 500 caracteres'],
            type: String
        },
        descripcion: String,
        precio: Number,
        fechaPublicacion: Date,
        autor: { id: String, nombreCompleto: String }
    })

    module.exports = mongoose.model('Libro', LibroSchema)
    ```
2. Modificar el controlador **BackendNode\controllers\libro.js**:
    ```js
    const ErrorResponse = require('../helper/errorResponse')
    const Libro = require('../models/Libro')

    exports.getLibros = async (req, res, next) => {
        try {
            const libroLista = await Libro.find()
            res.status(200).json(libroLista)
        } catch (err) {
            next(new ErrorResponse('No se pudo procesar el request ' + err.message, 404))
        }
    }

    exports.getLibroById = async (req, res, next) => {
        try {
            const libro = await Libro.findById(req.params.id)
            if(!libro){
                return next(new ErrorResponse('El libro no existe en la bd con este id ' + req.params.id, 404))
            }
            res.status(200).json(libro)
        } catch (err) {
            next(new ErrorResponse('El libro no existe con este id ' + req.params.id, 404))
        }
    }

    exports.crearLibro = async (req, res, next) => {
        try {
            const libro = await Libro.create(req.body)
            res.status(200).json({
                status: 200,
                data: libro
            })
        } catch (err) {
            next(new ErrorResponse('No es posible crear el libro ' + err.message, 404))
        }
    }

    exports.updateLibro = async (req, res, next) => {
        try {
            const libro = await Libro.findByIdAndUpdate(req.params.id, req.body)
            if(!libro){
                return next(new ErrorResponse('El libro no existe en la bd con este id ' + req.params.id, 404))
            }
            res.status(200).json({ status: 200, data: libro})
        } catch (err) {
            next(new ErrorResponse('El libro no existe con este id ' + req.params.id, 404))
        }
    }

    exports.deleteLibro = async (req, res, next) => {
        try {
            const libro = await Libro.findByIdAndDelete(req.params.id)
            if(!libro){
                return next(new ErrorResponse('El libro no existe en la bd con este id ' + req.params.id, 404))
            }
            res.status(200).json({ status: 200 })
        } catch (err) {
            next(new ErrorResponse('El libro no existe con este id ' + req.params.id, 404))
        }
    }
    ```
3. Modificar rutas **BackendNode\rutas\libro.js**:
    ```js
    const express = require('express')
    const ruta = express.Router()
    const { 
        getLibros, 
        getLibroById, 
        crearLibro, 
        updateLibro, 
        deleteLibro 
    } = require('../controllers/libro')

    ruta
        .route('/')
        .get(getLibros)
        .post(crearLibro)

    ruta
        .route('/:id')
        .get(getLibroById)
        .put(updateLibro)
        .delete(deleteLibro)

    module.exports = ruta
    ```
4. Realizar petición http:
    + Método: POST
    + URL: localhost:5000/api/libro
    + Body:
        ```json
        {
            "titulo": "Programacion MEAN",
            "descripcion": "Libro de programación",
            "fechaPublicacion": "2022-01-12",
            "autor": {
                "id": "6236600c01163a1d4d27779a",
                "nombreCompleto": "Pedro Bazó"
            }
        }
        ```
5. Realizar petición http:
    + Método: GET
    + URL: localhost:5000/api/libro

## Sección 6: Páginación en NodeJS
### 26. Que es Paginacion?
1. Parametros que requiere el backend para enviar registros paginados:
    + **PageSize**: Número de registros por página.
    + **Page**: Número de página.
    + **Sort**: Propiedad para ordenarlo.
    + **SortDirection**: Orden ascendente o descendente.
    + **Filter**: Filtro.

### 27. Paginacion con NodeJS y MongoDB
1. Modificar controlador **BackendNode\controllers\libro.js**:
    ```js
    ≡
    exports.pagination = async (req, res, next) => {
        try {
            const sort = req.body.sort
            const sortDirecion = req.body.sortDirecion
            const page = parseInt(req.body.page)
            const pageSize = parseInt(req.body.pageSize)
        
            let filterValor = ""
            let filterPropiedad = ""
            let libros = []
        
            let totalRows = 0
            // filterValue = { valor:"" , propiedad : ""}
            if (req.body.filterValue) {
                filterValor = req.body.filterValue.valor
                filterPropiedad = req.body.filterValue.propiedad
        
                libros = await Libro.find({
                        [filterPropiedad]: new RegExp(filterValor, "i"),
                    })
                    .sort({ [sort]: sortDirecion })
                    .skip((page - 1) * pageSize)
                    .limit(pageSize)
        
                totalRows = await Libro.find({
                    [filterPropiedad]: new RegExp(filterValor, "i"),
                }).count()
            } else {
                libros = await Libro.find()
                    .sort({ [sort]: sortDirecion })
                    .skip((page - 1) * pageSize)
                    .limit(pageSize)
        
                totalRows = await Libro.find().count()
            }
        
            const pagesQuantity = Math.ceil(totalRows / pageSize)
        
            res.status(200).json({
                status: 200,
                pageSize,
                page,
                sort,
                sortDirecion,
                pagesQuantity,
                totalRows,
                data: libros,
            })
        } catch (err) {
            next(new ErrorResponse("No se pudo procesar el request" + err.message, 400))
        }
    }
    ```
2. Modificar rutas **BackendNode\rutas\libro.js**:
    ```js
    ≡
    const { 
        getLibros, 
        getLibroById, 
        crearLibro, 
        updateLibro, 
        deleteLibro,
        pagination
    } = require('../controllers/libro')
    ≡
    ruta
        .route('/pagination')
        .post(pagination)

    module.exports = ruta   
    ```
3. Crear 20 registros de prueba en la colección **libros** mediante peticiones similares a esta:
    + Método: POST
    + URL: localhost:5000/api/libro
    + Body:
        ```json
        {
            "titulo": "Programacion MERN",
            "descripcion": "Libro de programación",
            "fechaPublicacion": "2022-01-12",
            "autor": {
                "id": "6236600c01163a1d4d27779a",
                "nombreCompleto": "Pedro Bazó"
            }
        }
        ```
4. Realizar petición http:
    + Método: POST
    + URL: localhost:5000/api/libro/pagination
    + Body:
        ```json
        {
            "pageSize": 2,
            "page": 1,
            "sort": "titulo",
            "sortDirection": "asc",
            "filterValue": { "valor": "libro", "propiedad": "descripcion" }
        }
        ```
    + **Nota**: revisar salida en http://jsonviewer.stack.hu


## Sección 7: Cors en NodeJS
### 28. Configuracion de Cors en NodeJS
1. Instalar Cors en el proyecto **BackendNode**:
    + $ npm install cors
2. Modificar **BackendNode\server.js**:
    ```js
    ≡
    const cors = require('cors')
    const errorHandler = require('./middleware/error')
    const connectDatabase = require('./config/db')
    ≡
    const app = express()
    app.use(express.json())
    app.use(cors())
    ≡
    ```


## Sección 8: Angular - Las Bases
### 29. Web Arquitectura MVC y SPA
+ **Contenido**: sobre las páginas web clásicas y los SPA.

### 30. Angular Framework
+ **Contenido**: sobra Angular.

### 31. Instalar Visual Studio Code
+ **Contenido**: sobre la instalación de VSCode.

### 32. Instalar Extensiones
+ **Contenido**: sobre la instalación de extensiones requeridas para VSCode.

### 33. Instalacion de NodeJS
+ **Contenido**: sobre la instalación de Node.js.

### 34. Creacion de Proyecto Angular
+ https://angular.io/cli
1. Instalar Angular a nivel global:
    + $ npm install -g @angular/cli
2. Crear proyecto Angular **mi-web-app**:
    + $ ng new mi-web-app
    + ? Would you like to add Angular routing? (y/N): y
    + Seleccionar: > CSS

### 35. Configuracion de Angular
1. Modificar **mi-web-app\tsconfig.app.json**:
    ```json
    ≡
    "compilerOptions": {
        "strict": false,
        ≡
    },
    ≡
    ```

### 36. Estructura de un proyecto Angular
+ **Contenido**: sobre la estructura de un proyecto Angular.

### 37. Ejecutar Proyecto Angular
1. Ejecutar el proyecto **mi-web-app**:
    + $ ng serve
    + **Nota**: para esta sección se recomienda trabajar en una terminal cmd.
2. Modificar **mi-web-app\src\app\app.component.html**:
    ```html
    <app-usuario></app-usuario>
    ```
3. Crear componente angular **mi-web-app\src\app\usuario.component.ts**:
    ```ts
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-usuario',
        templateUrl: './usuario.component.html'
    })

    export class UsuarioComponent{}
    ```
4. Crear template **mi-web-app\src\app\usuario.component.html**:
    ```html
    <h1>Primer componente Angular en Soluciones++</h1>
    ```
5. Registrar componente **usuario** en **mi-web-app\src\app\app.module.ts**:
    ```ts
    ≡
    import { AppComponent } from './app.component';
    import { UsuarioComponent } from './usuario.component';

    @NgModule({
        declarations: [
            ≡
            UsuarioComponent
        ],
        ≡
    })
    ≡
    ```

### 38. Comunicacion entre Javascript y Html en Angular
1. Modificar componente **mi-web-app\src\app\usuario.component.ts**:
    ```ts
    ≡
    export class UsuarioComponent{
        usuarioNombre = 'Pedro Bazó';
    }
    ```
2. Modificar template **mi-web-app\src\app\usuario.component.html**:
    ```html
    ≡
    <input type="text" [(ngModel)]="usuarioNombre">
    {{ usuarioNombre }}
    ```
3. Modificar **mi-web-app\src\app\app.module.ts**:
    ```ts
    ≡
    import { UsuarioComponent } from './usuario.component';
    import { FormsModule } from '@angular/forms';

    @NgModule({
        ≡
        imports: [
            ≡
            FormsModule
        ],
        ≡
    })
    ≡
    ```

### 39. Como trabajan los IF y For en Angular?
1. Modificar componente **mi-web-app\src\app\usuario.component.ts**:
    ```ts
    ≡
    export class UsuarioComponent{
    usuarios = ['Isabel', 'María', 'Rebeca'];
        usuarioNombre = '';
        visible = false;

        constructor(){
            setTimeout(() => {
                this.visible = true;
            }, 3000);
        }

        onAgregarUsuario(){
            this.usuarios.push(this.usuarioNombre)
        }
    }
    ```
2. Modificar template **mi-web-app\src\app\usuario.component.html**:
    ```html
    <h1>Primer componente Angular en Soluciones++</h1>
    <input *ngIf="visible" type="text" [(ngModel)]="usuarioNombre">
    <button *ngIf="visible" (click)="onAgregarUsuario()">Agregar</button>
    <div *ngFor="let usr of usuarios">{{ usr }}</div>
    ```

### 40. Comunicacion entre componentes Angular
1. Crear componente **mi-web-app\src\app\libros\libros.component.ts**:
    ```ts
    import { Component } from '@angular/core';

    @Component({
        selector: 'app-libros',
        templateUrl: './libros.component.html',
    })

    export class LibrosComponent {
        libros = ['Harry Potter', 'El Señor de los Anillos', 'Narnia'];
    }
    ```
2. Crear template **mi-web-app\src\app\libros\libros.component.html**:
    ```html
    <app-libro *ngFor="let libro of libros" [tituloLibro]="libro"></app-libro>
    ```
3. Crear componente **mi-web-app\src\app\libro\libro.component.ts**:
    ```ts
    import { Component, Input } from '@angular/core';

    @Component({
        selector: 'app-libro',
        templateUrl: 'libro.component.html',
        styleUrls: ['./libro.component.css'],
    })
    export class LibroComponent {
        @Input() tituloLibro: string;
    }
    ```
4. Crear template **mi-web-app\src\app\libro\libro.component.html**:
    ```html
    <div class="libro">
        <div>{{ tituloLibro }}</div>
        <p>Libro en oferta</p>
    </div>
    ```
5. Crear hoja de estilos **mi-web-app\src\app\libro\libro.component.css**:
    ```css
    .libro{
        border: 2px solid blue;
        padding: 12px;
        background-color: darkkhaki;
    }
    ```
6. Registrar nuevos componentes en **mi-web-app\src\app\app.module.ts**:
    ```ts
    ≡
    import { LibrosComponent } from './libros/libros.component';
    import { LibroComponent } from './libro/libro.component';

    @NgModule({
        declarations: [
            ≡
            LibrosComponent,
            LibroComponent
        ],
        ≡
    })
    ≡
    ```
7. Modificar **mi-web-app\src\app\app.component.html**:
    ```ts
    <app-libros></app-libros>
    ```

### 41. Trabajando la comunicacion con mensajes en Angular
1. Modificar template **mi-web-app\src\app\libro\libro.component.html**:
    ```html
    <div class="libro" (click)="onClicked()" >
        <div>{{ tituloLibro }}</div>
        <p>Libro en oferta</p>
    </div>
    ```
2. Modificar componente **mi-web-app\src\app\libro\libro.component.html**:
    ```ts
    import { Component, Input, EventEmitter, Output } from '@angular/core';
    ≡
    export class LibroComponent {
        @Input() tituloLibro: string;
        @Output() libroClicked = new EventEmitter();

        onClicked() {
            this.libroClicked.emit();
        }
    }
    ≡
    ```
3. Modificar template **mi-web-app\src\app\libros\libros.component.html**:
    ```html
    <app-libro (libroClicked)="eliminarLibro(libro)" *ngFor="let libro of libros" [tituloLibro]="libro"></app-libro>
    ```
4. Modificar componente **mi-web-app\src\app\libros\libros.component.ts**:
    ```ts
    ≡
    export class LibrosComponent {
        libros = ['Harry Potter', 'El Señor de los Anillos', 'Narnia'];
        eliminarLibro(libro){
            this.libros = this.libros.filter(p => p !== libro);
        }
    }
    ```

### 42. Formularios en Angular
1. Modificar template **mi-web-app\src\app\libros\libros.component.html**:
    ```html
    <h1>Libros Soluciones++</h1>

    <form (ngSubmit)="guardarLibro(f)" #f="ngForm">
        <input type="text" name="nombreLibro" ngModel required>
        <button type="submit">Agregar Libro</button>
    </form>

    <app-libro (libroClicked)="eliminarLibro(libro)" *ngFor="let libro of libros" [tituloLibro]="libro"></app-libro>
    ```
2. Modificar componente **mi-web-app\src\app\libros\libros.component.ts**:
    ```ts
    ≡
    export class LibrosComponent {
        ≡
        guardarLibro(f){
            // console.log('objeto formulario', f)
            if(f.valid){
                this.libros.push(f.value.nombreLibro)
            }
        }
    }
    ```

### 43. Servicios en Angular
1. Crear servicios **mi-web-app\src\app\services\libros.service.ts**:
    ```ts
    export class LibrosService {
        private libros = ['Para salvarte', 'Los 7 hábitos', 'Como ganar amigos'];

        agregarLibro(libroNombre: string){
            this.libros.push(libroNombre);
        }
        obtenerLibros(){
            return [...this.libros];
        }
    }
    ```
2. Modificar componente **mi-web-app\src\app\libros\libros.component.ts**:
    ```ts
    ≡
    import { LibrosService } from '../services/libros.service'
    ≡
    export class LibrosComponent {
        /* libros = ['Harry Potter', 'El Señor de los Anillos', 'Narnia']; */
        libros = [];
        constructor(private librosService: LibrosService){
            this.libros = librosService.obtenerLibros();
        }
        eliminarLibro(libro){
            //this.libros = this.libros.filter(p => p !== libro);
        }
        guardarLibro(f){
            if(f.valid){
                //this.libros.push(f.value.nombreLibro)
            }
        }
    }
    ```
3. Modificar **mi-web-app\src\app\app.module.ts**:
    ```ts
    ≡
    import { LibrosService } from './services/libros.service';

    @NgModule({
        ≡
        providers: [LibrosService],
        bootstrap: [AppComponent]
    })
    ≡
    ```

### 44. Subject y Services en Angular
+ https://rxjs.dev/guide/subject
1. Modificar componente **mi-web-app\src\app\libros\libros.component.ts**:
    ```ts
    import { Component, OnInit, OnDestroy } from '@angular/core';
    import { LibrosService } from '../services/libros.service';
    import { Subscription } from 'rxjs';

    @Component({
        selector: 'app-libros',
        templateUrl: './libros.component.html',
    })

    export class LibrosComponent implements OnInit, OnDestroy {
        /* libros = ['Harry Potter', 'El Señor de los Anillos', 'Narnia']; */
        libros = [];
        constructor(private librosService: LibrosService){}
        private libroSubscription: Subscription;
        eliminarLibro(libro){
            //this.libros = this.libros.filter(p => p !== libro);
        }
        guardarLibro(f){
            if(f.valid){
                //this.libros.push(f.value.nombreLibro)
                this.librosService.agregarLibro(f.value.nombreLibro);
                this.libroSubscription = this.librosService.librosSubject.subscribe(() => {
                    this.libros = this.librosService.obtenerLibros();
                });
            }
        }

        ngOnInit() {
            this.libros = this.librosService.obtenerLibros();
        }

        ngOnDestroy(){
            this.libroSubscription.unsubscribe();
        }
    }
    ```
2. Modificar servicio **mi-web-app\src\app\services\libros.service.ts**:
    ```ts
    import { Subject } from 'rxjs';

    export class LibrosService {
        librosSubject = new Subject();

        private libros = ['Para salvarte', 'Los 7 hábitos', 'Como ganar amigos'];

        agregarLibro(libroNombre: string){
            this.libros.push(libroNombre);
            //this.librosSubject.next();    /* Esta instrucción parece estar desactualizada */
            this.librosSubject.next(this.libros);
        }
        obtenerLibros(){
            return [...this.libros];
        }
    }
    ```

### 45. Eliminar Items con Subject
1. Modificar servicio **mi-web-app\src\app\services\libros.service.ts**:
    ```ts
    import { Subject } from 'rxjs';

    export class LibrosService {
        librosSubject = new Subject();

        private libros = ['Para salvarte', 'Los 7 hábitos', 'Como ganar amigos'];

        agregarLibro(libroNombre: string){
            this.libros.push(libroNombre);
            //this.librosSubject.next();  /* Esta instrucción parece estar desactualizada */
            this.librosSubject.next(1);
        }

        eliminarLibro(libroNombre: string){
            this.libros = this.libros.filter(p => p !== libroNombre);
            //this.librosSubject.next();  /* Esta instrucción parece estar desactualizada */
            this.librosSubject.next(1);
        }

        obtenerLibros(){
            return [...this.libros];
        }
    }
    ```
2. Modificar componente **mi-web-app\src\app\libro\libro.component.ts**:
    ```ts
    import { Component, Input, EventEmitter, Output } from '@angular/core';
    import { LibrosService } from '../services/libros.service';

    @Component({
        selector: 'app-libro',
        templateUrl: 'libro.component.html',
        styleUrls: ['./libro.component.css'],
    })
    export class LibroComponent {
        @Input() tituloLibro: string;
        @Output() libroClicked = new EventEmitter();

        constructor(private librosService: LibrosService){}

        onClicked() {
            //this.libroClicked.emit();
            this.librosService.eliminarLibro(this.tituloLibro);
        }
    }
    ```

### 46. Routing en Angular
1. Crear componente **mi-web-app\src\app\inicio.components.ts**:
    ```ts
    import { Component } from '@angular/core';

    @Component({
        template: '<h1>Bienvenido a Soluciones++</h1>'
    })

    export class InicioComponent{}
    ```
2. Modificar **mi-web-app\src\app\app.module.ts**:
    ```ts
    ≡
    import { InicioComponent } from './inicio.components';

    @NgModule({
        declarations: [
            ≡
            InicioComponent
        ],
        ≡
    })
    ≡
    ```
3. Modificar archivo de rutas **mi-web-app\src\app\app-routing.module.ts**:
    ```ts
    ≡
    import { InicioComponent } from './inicio.components';
    import { LibrosComponent } from './libros/libros.component';

    const routes: Routes = [
        { path: '', component: InicioComponent },
        { path: 'libros', component: LibrosComponent }
    ];
    ≡
    ```
4. Modificar **mi-web-app\src\app\app.component.html**:
    ```html
    <h1>App Angular en Soluciones++</h1>
    <a routerLink="/">Inicio</a>
    <a routerLink="/libros">Libros Soluciones++</a>
    <router-outlet></router-outlet>
    ```


## Sección 9: Angular Material y Creación de Interfaces Gráficas del Proyecto
### 47. Angular Material y Material Design
+ **Contenido**: sobre Angular Material y Material Design.

### 48. Agregar Material Design a mi proyecto Angular
+ **Documentación**: https://material.angular.io
+ **Iconos**: https://fonts.google.com/icons?selected=Material+Icons&icon.style=Filled
+ https://material.io
1. Agregar Material Design al proyecto **mi-web-app**:
    + $ ng add @angular/material
    + Would you like to proceed? (Y/n): y
    + Seleccionar: > Indigo/Pink        [ Preview: https://material.angular.io?theme=indigo-pink ]
    + ? Set up global Angular Material typography styles? (y/N): y
    + ? Set up browser animations for Angular Material? (Y/n): y

### 49. Agregar Componente Angular Material
1. Crear modulo **mi-web-app\src\app\material.module.ts**:
    ```ts
    import { NgModule } from '@angular/core';
    import { MatButtonModule } from '@angular/material/button';
    import { MatIconModule } from '@angular/material/icon';

    @NgModule({
    imports: [MatButtonModule, MatIconModule],
    exports: [MatButtonModule, MatIconModule]
    })

    export class MaterialModule{}
    ```
2. Registrar **MaterialModule** en **mi-web-app\src\app\app.module.ts**:
    ```ts
    ≡
    import { MaterialModule } from './material.module';

    @NgModule({
        ≡
        imports: [
            ≡
            MaterialModule
        ],
        ≡
    })
    ≡
    ```
3. Modificar **mi-web-app\src\app\app.component.html**:
    ```html
    <button mat-raised-button color="primary"> <mat-icon>account_circle</mat-icon> Soluciones++</button>
    ```

### 50. Estructura del Proyecto
1. En la raíz del proyecto **mi-web-app** para crear componentes registrar y login y que al mismo tiempo quede registrado en **mi-web-app\src\app\app.module.ts**:
    + $ ng g c seguridad/registrar --module app.module
    + $ ng g c seguridad/login --module app.module
2. Modificar archivo de rutas **mi-web-app\src\app\app-routing.module.ts**:
    ```ts
    ≡
    import { LoginComponent } from './seguridad/login/login.component';
    import { RegistrarComponent } from './seguridad/registrar/registrar.component';

    const routes: Routes = [
        ≡
        { path: 'registrar', component: RegistrarComponent },
        { path: 'login', component: LoginComponent }
    ];
    ≡
    ```
3. Modificar **mi-web-app\src\app\app.component.html**:
    ```html
    <router-outlet></router-outlet>
    ```

### 51. Crear Formulario con Angular y Material Design
1. Diseñar template **mi-web-app\src\app\seguridad\registrar\registrar.component.html**:
    ```html
    <section>
        <form>
            <mat-form-field>
                <mat-label>Ingrese e-mail</mat-label>
                <input type="email" matInput placeholder="solucionespp@gmail.com">
            </mat-form-field>

            <mat-form-field>
                <mat-label>Ingrese password</mat-label>
                <input type="password" matInput placeholder="Ingresa un password">
            </mat-form-field>
        </form>
    </section>
    ```
2. Modificar **mi-web-app\src\app\material.module.ts** para importar **MatInputModule** y **MatFormFieldModule**:
    ```ts
    import { NgModule } from '@angular/core';
    import { MatButtonModule } from '@angular/material/button';
    import { MatFormFieldModule } from '@angular/material/form-field';
    import { MatIconModule } from '@angular/material/icon';
    import { MatInputModule } from '@angular/material/input';

    @NgModule({
        imports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule],
        exports: [MatButtonModule, MatIconModule, MatInputModule, MatFormFieldModule]
    })

    export class MaterialModule{}
    ```

### 52. Flex en Angular
1. Modificar template **mi-web-app\src\app\seguridad\registrar\registrar.component.html**:
    ```html
    <section>
        <form>
            ≡
        </form>
    </section>

    <section id="contenedor">
        <div id="elemento1" class="elemento"></div>
        <div id="elemento2" class="elemento"></div>
        <div id="elemento3" class="elemento"></div>
    </section>
    ```
2. Establecer hoja de estilo **mi-web-app\src\app\seguridad\registrar\registrar.component.css**:
    ```css
    #contenedor {
        display: flex;
        width: 100%;
        height: 700px;
        border: 1px solid blue;
        /* flex-direction: column; */
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .elemento {
        width: 150px;
        height: 150px;
        /* flex: 1; */
    }

    #elemento1 {
        background-color: red;
    }

    #elemento2 {
        background-color: royalblue;
        /* flex: 2; */
    }

    #elemento3 {
        background-color: green;
    }
    ```

### 53. Flex en Formularios
+ https://github.com/angular/flex-layout
1. Instalar flex-loyout en el proyecto **mi-web-app**:
    + $ npm i -s @angular/flex-layout @angular/cdk
2. Modificar **mi-web-app\src\app\app.module.ts** para importar **FlexLayoutModule**:
    ```ts
    ≡
    import { FlexLayoutModule } from '@angular/flex-layout';

    @NgModule({
        ≡
        imports: [
            ≡
            FlexLayoutModule
        ],
        ≡
    })
    ≡
    ```
3. Modificar template **mi-web-app\src\app\seguridad\registrar\registrar.component.html**:
    ```html
    <section>
        <form fxLayout="column" fxLayoutAlign="center center">
            <mat-form-field>
                <mat-label>Ingrese e-mail</mat-label>
                <input type="email" matInput placeholder="solucionespp@gmail.com">
            </mat-form-field>

            <mat-form-field>
                <mat-label>Ingrese password</mat-label>
                <input type="password" matInput placeholder="Ingresa un password">
            </mat-form-field>
        </form>
    </section>
    ```
4. Modificar estilos **mi-web-app\src\app\seguridad\registrar\registrar.component.css**:
    ```css
    mat-form-field{
        width: 300px;
    }
    ```

### 54. Agregar boton submit a Form
1. Modificar template **mi-web-app\src\app\seguridad\registrar\registrar.component.html**:
    ```html
    <section>
        <form fxLayout="column" fxLayoutAlign="center center" #f="ngForm" (ngSubmit)="registrarUsuario(f)">
            <mat-form-field>
                <mat-label>Ingrese e-mail</mat-label>
                <input type="email" matInput placeholder="solucionespp@gmail.com" ngModel name="email">
            </mat-form-field>

            <mat-form-field>
                <mat-label>Ingrese password</mat-label>
                <input type="password" matInput placeholder="Ingresa un password" ngModel name="password">
            </mat-form-field>

            <button type="submit" mat-raised-button color="primary">Guardar</button>
        </form>
    </section>
    ```
2. Modificar componente **mi-web-app\src\app\seguridad\registrar\registrar.component.ts**:
    ```ts
    import { Component, OnInit } from '@angular/core';
    import { NgForm } from '@angular/forms';

    @Component({
        selector: 'app-registrar',
        templateUrl: './registrar.component.html',
        styleUrls: ['./registrar.component.css']
    })
    export class RegistrarComponent implements OnInit {

        constructor() { }

        ngOnInit(): void {
        }

        registrarUsuario(form: NgForm){
            console.log(form);
        }
    }
    ```

### 55. Validaciones en Angular
1. Modificar template **mi-web-app\src\app\seguridad\registrar\registrar.component.html**:
    ```ts
    <section>
        <form fxLayout="column" fxLayoutAlign="center center" #f="ngForm" (ngSubmit)="registrarUsuario(f)">
            <mat-form-field>
                <mat-label>Ingrese e-mail</mat-label>
                <input
                    type="email"
                    matInput
                    placeholder="solucionespp@gmail.com"
                    ngModel
                    name="email"
                    email
                    required
                    #emailInput="ngModel"
                >
                <mat-error *ngIf="emailInput.hasError('required')">El email es requerido</mat-error>
                <mat-error *ngIf="!emailInput.hasError('required')">email invalido</mat-error>
            </mat-form-field>

            <mat-form-field hintLabel="El password debe tener al menos 7 caracteres">
                <mat-label>Ingrese password</mat-label>
                <input
                    type="password"
                    matInput
                    placeholder="Ingresa un password"
                    ngModel name="password"
                    required
                    minlength="7"
                >
                <mat-error>El password debe tener al menos 7 caracteres</mat-error>
            </mat-form-field>

            <button type="submit" mat-raised-button color="primary">Guardar</button>
        </form>
    </section>
    ```

### 56. Implementar validaciones en evento submit
1. Modificar template **mi-web-app\src\app\seguridad\registrar\registrar.component.html**:
    ```html
    <section>
        <form
            fxLayout="column"
            fxLayoutAlign="center center"
            #f="ngForm"
            (ngSubmit)="registrarUsuario(f)"
            fxLayoutGap="10px"
        >
            <mat-form-field>
                <mat-label>Ingrese nombre</mat-label>
                <input
                    type="text"
                    matInput
                    placeholder="Ingrese su nombre"
                    ngModel
                    name="nombre"
                    required
                >
                <mat-error>El nombre es requerido</mat-error>
            </mat-form-field>

            <mat-form-field>
                <mat-label>Ingrese apellidos</mat-label>
                <input
                    type="text"
                    matInput
                    placeholder="Ingrese sus apellidos"
                    ngModel
                    name="apellidos"
                    required
                >
                <mat-error>Los apellidos son requeridos</mat-error>
            </mat-form-field>

            <mat-form-field>
                <mat-label>Ingrese un username</mat-label>
                <input
                    type="text"
                    matInput
                    placeholder="Ingrese un username"
                    ngModel
                    name="username"
                    required
                >
                <mat-error>El username es requerido</mat-error>
            </mat-form-field>

            <mat-form-field>
                <mat-label>Ingrese e-mail</mat-label>
                <input
                    type="email"
                    matInput
                    placeholder="solucionespp@gmail.com"
                    ngModel
                    name="email"
                    email
                    required
                    #emailInput="ngModel"
                >
                <mat-error *ngIf="emailInput.hasError('required')">El email es requerido</mat-error>
                <mat-error *ngIf="!emailInput.hasError('required')">email invalido</mat-error>
            </mat-form-field>

            <mat-form-field hintLabel="El password debe tener al menos 7 caracteres">
                <mat-label>Ingrese password</mat-label>
                <input
                    type="password"
                    matInput
                    placeholder="Ingresa un password"
                    ngModel name="password"
                    required
                    minlength="7"
                >
                <mat-error>El password debe tener al menos 7 caracteres</mat-error>
            </mat-form-field>

            <button type="submit" mat-raised-button color="primary" [disabled]="f.invalid">Guardar</button>
        </form>
    </section>
    ```


## Sección 10: Creación de barra de navegación
### 57. Agregar SideNavBar Componente
1. Implementar **MatSidenavModule** en **mi-web-app\src\app\material.module.ts**:
    ```ts
    ≡
    import { MatSidenavModule } from '@angular/material/sidenav';

    @NgModule({
        ≡
        exports: [
            ≡
            MatSidenavModule,
        ],
    })
    ≡
    ```
2. Modificar **mi-web-app\src\app\app.component.html**:
    ```html
    <mat-sidenav-container>
        <mat-sidenav #menu role="navigation">
            <p>Elemento Sidenav</p>
        </mat-sidenav>
        <mat-sidenav-content>
            <button (click)="menu.toggle()">Abreme</button>
            <router-outlet></router-outlet>
        </mat-sidenav-content>
    </mat-sidenav-container>
    ```
3. Modificar componente **mi-web-app\src\app\app.component.ts**:
    ```ts
    ≡
    export class AppComponent {
        abrirMenu = false;
    }
    ```

### 58. Toolbar en nuestra App
1. Agregar **MatToolbarModule** en **mi-web-app\src\app\material.module.ts**:
    ```ts
    ≡
    import { MatToolbarModule } from '@angular/material/toolbar';
    ≡
    @NgModule({
        imports: [
            ≡
            MatToolbarModule
        ],    
        exports: [
            ≡
            MatToolbarModule
        ],
    })
    ≡
    ```
2. Modificar template **mi-web-app\src\app\app.component.html**:
    ```html
    <mat-sidenav-container>
        <mat-sidenav #menu role="navigation">
            <p>Elemento Sidenav</p>
        </mat-sidenav>
        <mat-sidenav-content>
            <mat-toolbar color="primary">
                <button mat-icon-button (click)="menu.toggle()">
                    <mat-icon>menu</mat-icon>
                </button>
                <span>Libros Soluciones++</span>
                <a routerLink="/registrar">Registrar</a>
                <a routerLink="/login">Login</a>
                <a routerLink="/">Home</a>
            </mat-toolbar>
            <main>
                <router-outlet></router-outlet>
            </main>
        </mat-sidenav-content>
    </mat-sidenav-container>
    ```

### 59. Agregar estilos al toolbar
1. Agregar estilos en **mi-web-app\src\app\app.component.css**:
    ```css
    mat-sidenav-container, mat-sidenav-content, mat-sidenav {
        height: 100%;
    }

    mat-sidenav {
        width: 250px;
    }

    a {
        text-decoration: none;
        color: white;
    }

    a:hover, a:active {
        color: #DBCDE6;
    }

    .navegacion-menu {
        list-style: none;
        padding: 0;
        margin: 0;
    }
    ```
2. Modificar template **mi-web-app\src\app\app.component.html**:
    ```html
    <mat-sidenav-container>
        <mat-sidenav #menu role="navigation">
            <p>Elemento Sidenav</p>
        </mat-sidenav>
        <mat-sidenav-content>
            <mat-toolbar color="primary">
                <button mat-icon-button (click)="menu.toggle()">
                    <mat-icon>menu</mat-icon>
                </button>
                <span>Libros Soluciones++</span>
                <div fxFlex fxLayout fxLayoutAlign="flex-end">
                    <ul fxLayout="row" fxLayoutGap="10px" class="navegacion-menu">
                        <li><a routerLink="/registrar">Registrar</a></li>
                        <li><a routerLink="/login">Login</a></li>
                        <li><a routerLink="/">Home</a></li>
                    </ul>
                </div>
            </mat-toolbar>
            <main>
                <router-outlet></router-outlet>
            </main>
        </mat-sidenav-content>
    </mat-sidenav-container>
    ```

### 60. Angular responsive
+ https://github.com/angular/flex-layout/wiki/Responsive-API
1. Modificar template **mi-web-app\src\app\app.component.html**:
    ```html
    ≡
    <mat-toolbar color="primary">
        ≡
        <span>Libros Soluciones++</span>
        <div fxFlex fxLayout fxLayoutAlign="flex-end" fxHide.xs>
            ≡
        </div>
    </mat-toolbar>
    ≡
    ```

### 61. Agregar Menu a la barra de navegacion
+ https://material.angular.io/components/list/overview
1. Registrar **MatListModule** en **mi-web-app\src\app\material.module.ts**:
    ```ts
    ≡
    import { MatListModule } from '@angular/material/list';

    @NgModule({
        imports: [
            ≡
            MatListModule
        ],
        exports: [
            ≡
            MatListModule
        ],
    })
    ≡
    ```
2. Modificar template **mi-web-app\src\app\app.component.html**:
    ```html
    ≡
    <mat-sidenav #menu role="navigation">
        <mat-nav-list>
            <a mat-list-item routerLink="/" (click)="menu.close()">
                <mat-icon>home</mat-icon>
                <span class="navegacion-list-label">Inicio</span>
            </a>
            <a mat-list-item routerLink="/registrar" (click)="menu.close()">
                <mat-icon>how_to_reg</mat-icon>
                <span class="navegacion-list-label">Registrar</span>
            </a>
            <a mat-list-item routerLink="/login" (click)="menu.close()">
                <mat-icon>login</mat-icon>
                <span class="navegacion-list-label">Ingresar</span>
            </a>
        </mat-nav-list>
    </mat-sidenav>
    ≡
    ```
3. Agregar estilos en **mi-web-app\src\app\app.component.css**:
    ```css
    ≡
    .navegacion-list-label {
        display: inline-block;
        padding-left: 6px;
    }
    ```

### 62. Creacion de componente barra de menu
1. Generar componente **barra** y **menu-lista** y que se agregen a la configuración del proyecto **mi-web-app**:
    + $ ng g c navegacion/barra --module app.module
    + $ ng g c navegacion/menu-lista --module app.module
2. Modificar **mi-web-app\src\app\app.component.html**:
    ```html
    <mat-sidenav-container>
        <mat-sidenav #menu role="navigation">
            <app-menu-lista (menuToggle)="menu.toggle()"></app-menu-lista>
        </mat-sidenav>
        <mat-sidenav-content>
            <app-barra (menuToggle)="menu.toggle()"></app-barra>
            <main>
                <router-outlet></router-outlet>
            </main>
        </mat-sidenav-content>
    </mat-sidenav-container>
    ```
3. Diseñar template **mi-web-app\src\app\navegacion\menu-lista\menu-lista.component.html**:
    ```html
    <mat-nav-list>
        <a mat-list-item routerLink="/" (click)="onCerrarMenu()">
            <mat-icon>home</mat-icon>
            <span class="navegacion-list-label">Inicio</span>
        </a>
        <a mat-list-item routerLink="/registrar" (click)="onCerrarMenu()">
            <mat-icon>how_to_reg</mat-icon>
            <span class="navegacion-list-label">Registrar</span>
        </a>
        <a mat-list-item routerLink="/login" (click)="onCerrarMenu()">
            <mat-icon>login</mat-icon>
            <span class="navegacion-list-label">Ingresar</span>
        </a>
    </mat-nav-list>
    ```
4. Diseñar template **mi-web-app\src\app\navegacion\barra\barra.component.html**:
    ```html
    <mat-toolbar color="primary">
        <button mat-icon-button (click)="onMenuToggleDispatch()">
            <mat-icon>menu</mat-icon>
        </button>
        <span>Libros Soluciones++</span>
        <div fxFlex fxLayout fxLayoutAlign="flex-end" fxHide.xs>
            <ul fxLayout="row" fxLayoutGap="10px" class="navegacion-menu">
                <li><a routerLink="/registrar">Registrar</a></li>
                <li><a routerLink="/login">Login</a></li>
                <li><a routerLink="/">Home</a></li>
            </ul>
        </div>
    </mat-toolbar>
    ```
5. Modificar hoja de estilo **mi-web-app\src\app\app.component.css**:
    ```css
    mat-sidenav-container, mat-sidenav-content, mat-sidenav {
        height: 100%;
    }

    mat-sidenav {
        width: 250px;
    }
    ```
6. Establecer estilos en **mi-web-app\src\app\navegacion\menu-lista\menu-lista.component.css**:
    ```css
    a {
        text-decoration: none;
        color: white;
    }

    a:hover, a:active {
        color: #DBCDE6;
    }

    .navegacion-menu {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .navegacion-list-label {
        display: inline-block;
        padding-left: 6px;
    }
    ```
7. Establecer estilos en **mi-web-app\src\app\navegacion\barra\barra.component.css**:
    ```css
    a {
        text-decoration: none;
        color: white;
    }

    a:hover, a:active {
        color: #DBCDE6;
    }

    .navegacion-menu {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    .navegacion-list-label {
        display: inline-block;
        padding-left: 6px;
    }
    ```
8. Modificar componente **mi-web-app\src\app\navegacion\barra\barra.component.ts**:
    ```ts
    import { Component, EventEmitter, OnInit, Output } from '@angular/core';

    @Component({
        selector: 'app-barra',
        templateUrl: './barra.component.html',
        styleUrls: ['./barra.component.css']
    })
    export class BarraComponent implements OnInit {
        @Output() menuToggle = new EventEmitter<void>();

        constructor() { }

        ngOnInit(): void {
        }

        onMenuToggleDispatch() {
            this.menuToggle.emit()
        }

    }
    ```
9.  Modificar componente **mi-web-app\src\app\navegacion\menu-lista\menu-lista.component.ts**:
    ```ts
    import { Component, EventEmitter, OnInit, Output } from '@angular/core';

    @Component({
        selector: 'app-menu-lista',
        templateUrl: './menu-lista.component.html',
        styleUrls: ['./menu-lista.component.css']
    })
    export class MenuListaComponent implements OnInit {
        @Output() menuToggle = new EventEmitter<void>();

        constructor() { }

        ngOnInit(): void {
        }

        onCerrarMenu() {
            this.menuToggle.emit()
        }
    }
    ```


## Sección 11: Seguridad en Angular
### 63. Creacion de Formulario Login
9 min


   









    ```ts
    ≡
    ≡
    ```







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


## Sección 12: Mentenimiento de la App con Angular
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


## Comandos comunes
+ Ejecutar proyecto Angular:
    + $ ng serve
