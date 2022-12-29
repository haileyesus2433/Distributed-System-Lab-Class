import net from 'net';

const host = "127.0.0.1";

const port = 4000;
const SIM_LENGTH = 20;

try {
    const server = net.createServer((socket) => {

        for (let count = 0; count <= SIM_LENGTH; count++) {
            socket.write(`connect_socket ${count} \n`)
            console.log(`Server has written ${count} to socket \n`);

        }
        socket.end();


    });
    server.listen(port, () => {
        console.log("Server is alive and wating for socket connection from client Information.\n");
    });
} catch (error) {
    console.error('Socket error')
}
