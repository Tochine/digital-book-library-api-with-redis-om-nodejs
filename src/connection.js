import { Client } from 'redis-om'

const client = new Client()
const DBConnection = await client.open('redis://password@public-endpoint:port');

export default DBConnection;