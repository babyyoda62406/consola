require('colors')
const {saveData,
       readData} =  require('./helpers/fs_handler.js')
const { pausa,
        crearMenu, 
        crearTarea ,
        MenuDelete ,
        confirmar,
        listarCompletar} = require('./helpers/inquirer.js')
const Tareas = require('./models/tareas.js')

main = async() => {
    
    let opt =  '' 
    tareas = new Tareas()
    tareas.uploadDB(readData())
   
    do{
        console.clear()
        opt = await crearMenu()
        switch (opt) {
            case '1':
                const {ask} = await crearTarea()
                //console.log(ask)
                tareas.pushTarea(ask)   
                break
            case '2':
                tareas.showTareas()      
                break
            case '3':
                tareas.showTareas('ready')      
                break
            case '4':
                tareas.showTareas('unready')      
                break
            case '5':
                let checklist  = await listarCompletar(tareas.showArray())
                tareas.toggleState(checklist)
                break 
            case '6':
                let howDelete = await MenuDelete(tareas.showArray())
                if(howDelete){
                    let ok  = await confirmar('Estas seguro')
                    if(ok)
                        tareas.borrar(--howDelete)
                }
                break 
        }        
        if(opt!='0')await pausa()
        saveData(tareas.showArray())


    }while(opt!='0')
    
}


main()















