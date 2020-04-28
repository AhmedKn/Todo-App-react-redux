import {COMPLETED} from './actionstypes.js'


const completedtodo = (id) =>{
    return {
        type : COMPLETED,
        id
    }
}

export default completedtodo;