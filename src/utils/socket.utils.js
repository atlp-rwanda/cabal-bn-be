/* eslint-disable no-plusplus */
/* eslint-disable camelcase */
import { Server } from 'socket.io';
import { decodeToken } from '../helpers/user.helpers';
import { Message, User } from '../database/models';

const io = new Server({
  cors: {
    origin: '*'
  }
});

// check if user is logged in
io.use((socket, next) => {
  try {
    const { auth } = socket.handshake;
    /* istanbul ignore next */
    if (!auth.token) {
      return next(new Error('user not logged in'));
    }

    /// will return the error which will be catched if invalid token
    decodeToken(auth.token);

    return next();
  } catch (error) {
    /* istanbul ignore next */
    return next(new Error(error.message));
  }
});

const users = [];
let onlineUsers = 0;
io.on('connection', async (socket) => {
  onlineUsers++;
  const { auth } = socket.handshake;
  const messageIncludes = [
    {
      model: User,
      attributes: ['id', 'first_name', 'last_name', 'email']
    }
  ];
  const messageAttr = ['id', 'user_id', 'message', 'createdAt'];

  // authenticate
  try {
    const user = decodeToken(auth.token);
    user.socketId = socket.id;
    users.push(user);

    // will retrieve all messages and send them to the user connecting
    socket.emit('user:online', {
      total: onlineUsers,
      messages: await Message.findAll({
        attributes: messageAttr,
        include: messageIncludes
      })
    });

    // will receive a message post and broadcast them to all the others online
    socket.on('message:send', async (data) => {
      const { userId: user_id } = decodeToken(auth.token);
      const { id } = await Message.create({ message: data.message, user_id });
      const message = await Message.findOne({
        where: { id },
        include: messageIncludes
      });

      io.sockets.emit('message:recieve', { message });
    });
  } catch (err) {
    // jwt verification failed
    /* istanbul ignore next */
    socket.emit('authFailed', 'user not logged in'); // emits event to client to let client know authentication failed, optional.
    /* istanbul ignore next */
    socket.disconnect(); // disconnect client
  }

  socket.on('disconnect', () => {
    onlineUsers--;
    console.log('A client disconnected');
  });
});

export { io, users };
