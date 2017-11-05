import io from 'socket.io-client';

let socketClient = io.connect('http://localhost:5050');
export default socketClient;