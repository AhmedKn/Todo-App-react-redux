import React from 'react'
import AddTodo from './Addtodo'
import Display from './display.js'
import Header from './Header.js'

const App = () =>{
    return (
        <div>
         <Header />
         <AddTodo />
         <Display />
        </div>
    )
}


export default App;