import {createClient, RedisClientType} from "redis";

export let db = undefined;

export async function createDB(url: string, token?: string) {
    const redisClient = createClient({url: url});
    redisClient.on('error', (err) => console.log('Redis Client Error', err));

    await redisClient.connect();
    db = redisClient;
}

