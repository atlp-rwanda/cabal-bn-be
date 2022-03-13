import redis from 'redis';
import { createClient } from '@node-redis/client';

const client = redis.createClient();

export default client;
