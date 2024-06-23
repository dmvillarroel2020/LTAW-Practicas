const express = require('express');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

app.use(express.static('public'));

const users = {};

io.on('connection', (socket) => {
    console.log('Nuevo usuario conectado');
    socket.emit('chat message', 'Bienvenido al chat');

    socket.broadcast.emit('chat message', 'Un nuevo usuario se ha conectado');

    socket.on('new user', (username) => {
        users[socket.id] = username;
        io.emit('user list', Object.values(users));
    });

    socket.on('typing', (isTyping) => {
        socket.broadcast.emit('typing', { user: users[socket.id], isTyping });
    });

    socket.on('chat message', (msg) => {
        if (msg.startsWith('/')) {
            handleCommand(socket, msg);
        } else {
            io.emit('chat message', `${users[socket.id] || 'Anónimo'}: ${msg}`);
        }
    });

    socket.on('private message', ({ to, message }) => {
        const recipientSocketId = Object.keys(users).find(key => users[key] === to);
        if (recipientSocketId) {
            io.to(recipientSocketId).emit('chat message', `Mensaje privado de ${users[socket.id]}: ${message}`);
        }
    });

    socket.on('disconnect', () => {
        io.emit('chat message', `${users[socket.id] || 'Un usuario'} se ha desconectado`);
        delete users[socket.id];
        io.emit('user list', Object.values(users));
    });
});

const handleCommand = (socket, msg) => {
    const command = msg.slice(1).split(' ')[0];

    switch (command) {
        case 'help':
            socket.emit('chat message', 'Comandos soportados: /help, /list, /hello, /date, /msg <username> <message>');
            break;
        case 'list':
            socket.emit('chat message', `Usuarios conectados: ${Object.keys(users).length}`);
            break;
        case 'hello':
            socket.emit('chat message', 'Hola! ¿Cómo estás?');
            break;
        case 'date':
            socket.emit('chat message', `Fecha actual: ${new Date().toLocaleString()}`);
            break;
        case 'msg':
            const [_, to, ...messageParts] = msg.split(' ');
            const message = messageParts.join(' ');
            socket.emit('private message', { to, message });
            break;
        default:
            socket.emit('chat message', 'Comando no reconocido. Usa /help para ver los comandos disponibles.');
    }
};

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
