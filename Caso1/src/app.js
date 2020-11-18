const express = require('express'); //Framewordk
const path    = require('path');
const logger  = require('morgan');

const app = express();//Ejecutar framework

//Configuraciones del Servidor
app.set('port', process.env.PORT || 5000); //Configuracion del puerto
app.set('views', path.resolve(__dirname, 'views')); //Concatenando las views
app.set('view engine', 'ejs'); //Motor de plantillas <%EJS%>
//Lectura de CSS IMG
app.use("/css",express.static(__dirname + "/css"));
app.use("/img",express.static(__dirname + "/img"));
// Middlewares
app.use(logger('dev')); //Funciones de Ejecucion antes de llegar a la ruta
app.use(express.urlencoded({extended: false})); //Interpreta datos a  JSON 

// Routes
app.use(require('./routes/index'));

app.use(express.static(path.join(__dirname, 'public')));

// ERROR 404
app.use((req, res, next) => {
  res.status(404).render('404');
});

module.exports = app;