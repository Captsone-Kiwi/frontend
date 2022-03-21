const express = require('express')
const socketio = require('socket.io')
const http = require('http')
// const cors = require('cors');

const { addUser, removeUser, getUser, getUsersInRoom } = require('./users');
const router = require('./router');
const PORT = process.env.PORT || 5000

const app = express();
const server = http.createServer(app);
const io = socketio(server);

// app.use(cors());
app.use(router);


io.on('connection', (socket) => {
    socket.on('join',({username, room}, callback) => {
        const {error, user} = addUser({ id: socket.id, username, room});

        console.log(username, room);
        if (error) return callback(error);

        socket.join(user.room);

        socket.emit('message', { user: 'admin', text: `${user.username}, welcome to the room ${user.room}`});
        
        socket.broadcast.to(user.room).emit('message',{
            user : 'admin', text : `${user.username}, has joined`
        });

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        callback();
    });
    
    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.room).emit('message', {user: user.username, text: message});

        callback();
    });


    socket.on('disconnect',()=>{
        const user = removeUser(socket.id);
        if (user){
            io.to(user.room).emit('message', {user: 'admin', text: `${user.username} has left`});
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room)});
        }
    })
});


server.listen(process.env.PORT || 5000, () => console.log(`Server has started.`));
