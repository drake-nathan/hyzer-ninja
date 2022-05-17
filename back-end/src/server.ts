import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';

import setupDevDb from './dbconfig/setup-dev-db';
import discRouter from './routers/disc-router';

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/test', (req, res) => res.send('Beers, Beets, Battlestar Gallactica'));
app.use('/setupdevdb', setupDevDb);
app.use('/api/discs', discRouter);

const port = parseInt(process.env.PORT);
export const server = http.createServer(app);
server.listen(port);
console.log('Server listening on:', port);
