const createOptions = {
    descripcion: {
        demand: true,
        alias: 'd'
    }
}

const updateOptions = {
    createOptions,
    completado: {
        default: true,
        alias: 'c'
    }
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', createOptions)
    .command('actualizar', 'Actualizar el estado completado de una tarea', updateOptions)
    .command('borrar', 'Elimina un elemento de las tareas por hacer', createOptions)
    .help()
    .argv;

module.exports = {
    argv
}