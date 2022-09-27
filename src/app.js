import express from 'express';
import routes from './routes.js';

const app = express()


app.use(express.json());


const PORT = process.env.PORT || 3000

app.use('/api/v1', routes);

app.listen(PORT, async () => {
    console.log(`app is running on port ${PORT}`)
})