const inquirer = require('inquirer')
require('colors')


const crearMenu  = async() => {
    const question = [
        {
            type: 'list',
            loop: true ,
            name:'option',
            message: 'Que desea hacer',
            choices: [
                {
                    value:'1',
                    name: `${'1'.green} Crear tarea`
                },
                {
                    value:'2',
                    name: `${'2'.green} Listar tareas`
                },
                {
                    value:'3',
                    name: `${'3'.green} Listar tareas completadas`
                },
                {
                    value:'4',
                    name: `${'4'.green} Listar tareas pendientes`
                },
                {
                    value:'5',
                    name: `${'5'.green} Completar tareaa`
                },
                {
                    value:'6',
                    name: `${'6'.green} Borrar tarea`
                },
                {
                    value:'0',
                    name: `${'0'.green} Salir`
                }
            ]
        }
    ]
    const {option}  =   await inquirer.prompt(question)
    return option
}

const crearTarea  = () => {
    question =[
        {
            type: 'input',
            mesagge: 'Nombre la tarea?' ,
            name: 'ask',
            validate(ask){
                if(ask) return true
                else throw 'Ingrese un valor'
            }
            
        }
    ]
   return  {ask}  = inquirer.prompt(question)
   
}

const pausa = async() => {
    const question =[
        {
            type:'input',
            name:'pausa', 
            message: 'Presione una tecla para continuar'   
        }
    ]
    await inquirer.prompt(question)
}

const MenuDelete  = async(bag  = []) => {
    let choices = [ ]
    choices.push({
        value: 0,
        name: '0. Cancelar'
    })
    let id =1 
    bag.map( item => {
        choices.push({
            value: id,
            name:`${id}. ${ item.desc}`
        })
        id++
    })

    const preguntas  = [
        {
            name: 'howDelete' , 
            type: 'list', 
            loop: true, 
            message:'Borrar Tarea',
            choices
        }
    ]
    const {howDelete}  = await inquirer.prompt(preguntas)
    return howDelete
}

const listarCompletar = async(bag= []) => {
    let choices = [ ]
    
    let id =1 
    bag.map( item => {
        choices.push({
            value: id,
            name:`${id}. ${ item.desc}`, 
            checked:  (item.completadoEn) ? true : false
        })
        id++
    })
    pregunta = [
        {
            type: 'checkbox', 
            name: 'check', 
            mesagge: 'Completada', 
            choices
        }
    ]
    const {check} = await inquirer.prompt(pregunta)
    return check 
}

const confirmar = async(message) => {
    preguntas = [
        {
            type:'confirm' , 
            name: 'ok' , 
            message
        }
    ]

    const {ok} = await inquirer.prompt(preguntas)
    return ok 
}

module.exports = {
    pausa,
    crearMenu, 
    crearTarea ,
    MenuDelete,
    confirmar, 
    listarCompletar
}

