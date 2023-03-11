const {v4: uudiv4} = require('uuid')

class Tarea {
    constructor(desc){
        this.id = uudiv4()
        this.desc = desc 
        this.completadoEn = null
        return this
    }

}

module.exports = Tarea