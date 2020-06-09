const fs = require('fs');
let listadoPorHacer = [];


const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);
    fs.writeFile('database/data.json', data, (err) => {
        if (err) { throw err };
    });
}

const cargarDB = () => {
    try {
        listadoPorHacer = require('../database/data.json')
        return listadoPorHacer
    } catch (error) {
        listadoPorHacer = [];
        return listadoPorHacer
    }
}

const getListado = () => {

    listado = cargarDB();

    return listado;
}
const crear = (descripcion) => {

    cargarDB();

    let porHacer = {
        descripcion,
        completado: false,
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const actualizar = (descripcion, completado = true) => {
    cargarDB()
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB();
        console.log('Tarea actualizada.'.bgGreen);
        return true;
    } else {
        return false;
    }

}

const borrar = (descripcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descripcion === descripcion)
    if (index >= 0) {
        let borrado = listadoPorHacer.splice(index, 1);
        guardarDB();
        return true;
    } else {
        return false;
    }
}


module.exports = {
    crear,
    getListado,
    actualizar,
    borrar,
}