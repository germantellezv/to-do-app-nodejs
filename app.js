const argv = require('./config/yargs').argv;
const porHacer = require('./por-hacer/por-hacer')
const colors = require('colors');
let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;
    case 'listar':
        let listado = porHacer.getListado();
        if (listado.length > 0) {
            console.log('======TAREAS PENDIENTES ======'.green);
            for (let i = 0; i < listado.length; i++) {
                const tarea = listado[i];
                console.log(tarea.descripcion);
                console.log('Estado: ', tarea.completado);
                console.log('------------------------------');
            }
            console.log('=============================='.green);
        } else {
            console.log('Aún no hay tareas guardadas'.bgRed);
        }
        break;
    case 'actualizar':
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado)
        break;

    case 'borrar':
        const borrado = porHacer.borrar(argv.descripcion)
        console.log('Tarea borrada'.bgBlue);
        break;
    default:
        console.log('Comando no reconocido');
        break;
}