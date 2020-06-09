const argv = require('yargs')
    .command('crear', 'Crear una tarea pendiente', {
        descripcion: {
            alias: 'd',
            describe: 'Descripción de la tarea',
            demand: true,
        }
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion: {
            alias: 'd',
            describe: 'Descripción de la tarea',
            demand: true,
        },
        completado: {
            alias: 'c',
            describe: 'Marcar tarea como completada',
            default: true,
        }
    })
    .command('borrar', 'Borrar una tarea pendiente', {
        descripcion: {
            alias: 'd',
            describe: 'Descripción de la tarea',
            demand: true,
        }
    })
    .help()
    .argv;

module.exports = {
    argv,
}