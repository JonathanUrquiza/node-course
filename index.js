//cargar la libreria http, esto se ejecuta en el servidor
const http = require('http');
const Chance = require('Chance');

const chance = new Chance();

//definir un servidor
const server = http.createServer(function(request, response) {
    //cada petición se ejecuta esto
    response.writeHead(200, {'content-type': 'text/html'})//lee las etiquetas html!
    //response.writeHead(200, {'content-type': 'text/plain'})  solo lee texto plano!!

    response.end('wake up, ' + chance.name());
//las app de node se cargan y se guardan en memoria, por lo tanto los cambios no se ejecutan!
})

//arrancar el servidor
server.listen(1337, '127.0.0.1');
console.log("server arrancado en http://127.0.0.1:1337");



