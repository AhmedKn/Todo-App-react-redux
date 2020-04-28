import {DELETE} from './actionstypes.js'

const deletetodo = (id) =>{
    return {
        type : DELETE,
        id
    }
}


export default deletetodo;