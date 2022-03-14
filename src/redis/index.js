import redis from 'redis';
import { createClient } from '@node-redis/client';

const client = createClient();
client.on('connect', () => {
  console.log('Client connected');
});
client.connect();

export default client;
