const http = require('http');

const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);



// Enviando Archivos Estáticos
app.use(express.static('public'));

// Inicializando Servidor 
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});