import {ADD_TODO} from './actionstypes.js'



export const addtodo = (todo) =>{
return {
    type :ADD_TODO,
    todos : {todo,
    id: 1 + Math.random(),
    completed : false,
    isEditable : false,
    className:'Not-Lined',
    classcheck:'fa fa-circle',
    itemSection : 'item-section-notLined'}
}
}



