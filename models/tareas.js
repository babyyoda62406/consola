const Tarea = require("./tarea")


class Tareas{
    constructor(desc){
        this._listado = []
      
    }
    pushTarea(desc){
        this._listado.push(new Tarea(desc))
    }
   
    showTareas(query  = 'all'){
        let  id =  0 
        switch(query){
            case 'all':
                this._listado.map(item => {
                   id++ 
                   let name  = item.desc
                   let state = (item.completadoEn)
                                ? 'Completado'.green
                                : 'Pendiente'.red
                    console.log(`${id} ${name}   ${state}` )
                })
                break
             case 'ready':
                this._listado.map(item => {
                    let name  = item.desc
                    let state = (item.completadoEn)
                                 ? 'Completado'.green
                                 : 'Pendiente'.red
                     if(item.completadoEn){
                         id++ 
                        console.log(`${id} ${name}   ${state} ${item.completadoEn}` )
                     }
                 })
                break
            case 'unready':
                this._listado.map(item => {
                    let name  = item.desc
                    let state = (item.completadoEn)
                                 ? 'Completado'.green
                                 : 'Pendiente'.red
                     if(!item.completadoEn){
                        id++ 
                        console.log(`${id} ${name}   ${state} ` )
                     }
                 })
                break        
        }
    }
    uploadDB(arg= []){
        this._listado = arg
    }
    borrar(flag){
        let temp = []
        this._listado.forEach(arg => {
            if(arg !== this._listado[flag] )
                temp.push(arg)
        })
        this._listado = temp 
    }
    showArray(){
        return this._listado
    }
    toggleState(bundle){
        let temp = []
        bundle.forEach(id => {
            id--
            this._listado.forEach(( item, idx) => {
                if(id==idx) temp.push(this._listado[idx])
            })
        })
        this,this._listado.forEach(item => {
            if(temp.includes(item)){
                item.completadoEn = new Date().toISOString()
            }else{
                item.completadoEn = null
            }
        })

 
    }
}

module.exports = Tareas