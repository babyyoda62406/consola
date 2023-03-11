fs  = require('fs')

const saveData   =  (data) => {
    
    fs.writeFileSync('db/db.json' , JSON.stringify(data))
   
}

const readData =  () => {
    try{
        return JSON.parse(fs.readFileSync('./db/db.json' , {encoding: 'utf-8'}))
    }
    catch(error){
        return null 
    }
}



module.exports= {
    saveData, 
    readData
}