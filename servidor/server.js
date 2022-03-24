const http = require('http')

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

const PORT = 5000

server.listen(PORT, ()  => console.log('Servidor levantado'))