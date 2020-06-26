const fs = require('fs');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error('Error al guardar la tarea', err);
    });
}

const loadData = () => {
    try {
        toDoList = require('../db/data.json');
    } catch (error) {
        toDoList = [];
    }
}

const crear = (descripcion) => {
    loadData();
    let toDo = {
        descripcion,
        completado: false
    }

    toDoList.push(toDo);
    saveDB();
    return toDo;
}

const getListado = () => {
    loadData();
    return toDoList;
}

const actualizar = (descripcion, completado) => {
    loadData();
    let index = toDoList.findIndex(task => task.descripcion === descripcion);
    if (index >= 0) {
        toDoList[index].completado = completado;
        saveDB();
        return true;
    }
    return false;
}

const borrar = (desc) => {
    loadData();
    let firstLength = toDoList.length;
    let index = toDoList.findIndex(task => task.descripcion === desc);
    toDoList.splice(index, 1);
    /* return toDoList.length < firstLength ? true : false; */
    if (toDoList.length < firstLength) {
        saveDB();
        return true;
    }
    return false;
}

module.exports = {
    crear,
    saveDB,
    getListado,
    actualizar,
    borrar
}