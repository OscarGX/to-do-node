const argv = require("./config/yargs").argv;
const toDo = require('./to-do/to-do');
const colors = require('colors/safe');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = toDo.getListado();
        for (const task of listado) {
            console.log(colors.green('======= Por hacer ======='));
            console.log(task.descripcion);
            console.log(`Estado: ${task.completado ? colors.green('Completado') : colors.red('Incompleto')}`);
            console.log(colors.green('========================='));
        }
        break;

    case 'actualizar':
        if (toDo.actualizar(argv.d, argv.c)) {
            console.log(colors.green('Se actualizó correctamente'));
        } else {
            console.log(colors.red('Hubo un error en la actualización'));
        }
        break;

    case 'borrar':
        if (toDo.borrar(argv.d)) {
            console.log(colors.green(`Se eliminó correctamente la tarea`));
        } else {
            console.log(colors.red('Hubo un error'));
        }
        break;

    default:
        console.log('No se reconoce el comando');
}