import React from 'react'
import {connect} from 'react-redux'
import {addtodo} from '../actions/addtodo.js'
import '../cssfiles/Addtodo.css'


function AddTodo(props){
    let input
    return (
        <div>
           <form
           onSubmit={
            e => {
                e.preventDefault()
                if (input.value.length > 0) {
                  
                    props.addtodo(input.value)
                input.value = ''
              }}}
           >

           <input placeholder='Add Task Here...' className='input' ref={node => (input = node)}  />
            <button className='btn-add' onClick={ e => {
                e.preventDefault()
                if (input.value.length > 0) {
                  
               props.addtodo(input.value)
                input.value = ''
              }}}>+</button>
           </form>
        </div>
    )
}


    
const MapDispatchToProps = dispatch =>{
    return {
        addtodo :(todo) => dispatch(addtodo(todo))
    }
} 


export default connect(null ,MapDispatchToProps)(AddTodo)