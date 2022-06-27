const express = require('express'); //Módulo externo
const route = express.Router(); //Para manejar las rutas
const path = require("path"); //Módulo interno

var options = { root: path.join(__dirname, "../vistas") }; //utilizado para el metodo sendFile

route.get("/", (req, res) => {
    res.sendFile("index.html", options);
});

route.get("/inicio", (req, res) => {
    res.sendFile("alumnos.html", options);
});

route.get("/respaldo", (req, res) => {
    res.sendFile("respaldo.html", options);
});

route.get("/prepararUsb", (req, res) => {
    res.sendFile("prepararUsb.html", options);
});

route.get("/prepararBios", (req, res) => {
    res.sendFile("prepararBios.html", options);
});

route.get("/prepararUsb", (req, res) => {
    res.sendFile("prepararUsb.html", options);
});

route.get("/instalarWindows", (req, res) => {
    res.sendFile("instalarWindows.html", options);
});

route.get("/instalarControladores", (req, res) => {
    res.sendFile("instalarControladores.html", options);
});

module.exports = route;