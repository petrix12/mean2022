const http = require('http')

const server = http.createServer((request, response) => {
    const { headers, url, method } = request
    console.log(headers, url, method)
    response.end()
})

const PORT = 5000

server.listen(PORT, ()  => console.log('Servidor levantado'))