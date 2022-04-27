import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', (req, res) => res.send('Beers, Beets, Battlestar Gallactica'));

const port = parseInt(process.env.PORT);
export const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
