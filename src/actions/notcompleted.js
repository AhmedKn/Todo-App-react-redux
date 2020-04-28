import {NOT_COMPLETED} from '../actions/actionstypes'


const notcompleted = (id) =>{
    return {
        type : NOT_COMPLETED,
        id
    }
}

export default notcompleted;