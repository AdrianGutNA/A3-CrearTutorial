const express = require('express');
var servidor = express();

servidor.set("puerto", 3000);

servidor.use(require("./rutas/solicitudes.js"));
servidor.use(express.static('public'));

servidor.listen(servidor.get("puerto"), () => {
    console.log('Aplicación Iniciada, escuchando en el puerto: ', servidor.get("puerto"));
});