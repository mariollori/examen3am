 
import express, { json } from 'express';
import logger from 'morgan';

import cors from "cors";
import user from './routes/auth.router';
import post from './routes/post.route';

var app = express();

//Dependencias
app.use(logger('dev'));
app.use(json());
app.use(cors());

// Rutas
app.use('/auth', user);
app.use('/posts', post);

//Database
import { pg } from "./database";

app.listen(process.env.PORT || 5080);



