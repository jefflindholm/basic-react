const app = require('../server-app');
const http = require('http');

const server = http.createServer(app);

function normalizePort(val) {
    const port = parseInt(val, 10); // eslint-disable-line no-shadow

    if (isNaN(port)) {
        // named pipe
        return val;
    }

    if (port >= 0) {
        // port number
        return port;
    }

    return false;
}
const port = normalizePort(process.env.PORT || '3001');


function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    // const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;
    console.log('Server created', addr);
}

app.set('port', port);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
