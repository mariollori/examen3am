 
var express = require('express');
var logger = require('morgan');

var cors = require("cors");
var alumno = require('./routes/alumno.router');
var escuela = require('./routes/escuela.route');

var app = express();

//Dependencias
app.use(logger('dev'));
app.use(express.json());
app.use(cors());

// Rutas
app.use('/', escuela);
app.use('/alumnos', alumno);

//Database
const { pg } = require("./database");

app.listen(process.env.PORT || 5080);



