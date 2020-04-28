import React, { useState } from 'react'
import {connect} from 'react-redux'
import '../cssfiles/display.css'
import deletetodo from '../actions/deletetodo'
import completedtodo from '../actions/completedtodo'
import notcompleted from '../actions/notcompleted'
import { edit } from '../actions/edit'
import { update } from '../actions/update'




const Display = (props) =>{
    const [updateditem, setUpdateditem] = useState("");
    return (
            <div>
                {props.listtodo.map(i => 
                    i.isEditable ? (
                        <div className='editable-section' key={i.id}>
                         <input className='edit-input'  placeholder={i.todo} onChange={(event) => setUpdateditem(event.target.value)} />
                         <button className='update-btn' onClick={() => updateditem.length>0 && props.update({id : i.id , todo : updateditem})}><i class="fa fa-check"></i></button>
                            </div>
                    ) : 
                    <li className={(i.itemSection)} key={i.id} >
<div className='name-cheked' onClick={() => i.completed=== false ? props.completedtodo(i.id) : props.notcompleted(i.id) }>
    <i className={i.classcheck}></i>
    <p className={i.className} >{i.todo}</p>
</div>
<div className='btns-add-del'>
    <button className='btn-modify' onClick={() => props.edit(i.id)} ><i className='fa fa-edit'></i></button>
    <button className="btn-delete" onClick={() => props.deletetodo(i.id)} ><i className="fa fa-trash"></i></button>
</div>        
</li> 
                
                
        )
    }
    </div>)
}

    const mapStateToProps = (state) =>({
        listtodo : state.addtodo
    })

    const mapDispatchToProps = dispatch => {
     return {
        deletetodo :(id) => dispatch(deletetodo(id)),
        completedtodo :(id) => dispatch(completedtodo(id)),
        notcompleted :(id) => dispatch(notcompleted(id)),
        edit : (id) => dispatch(edit(id)),
        update : (data) => dispatch(update(data))
     }
    }

export default connect(mapStateToProps , mapDispatchToProps)(Display);

{/* <li className={(i.itemSection)} key={i.id} >
<div className='name-cheked' onClick={() => i.completed=== false ? props.completedtodo(i.id) : props.notcompleted(i.id) }>
    <i className={i.classcheck}></i>
    <p className={i.className} >{i.todo}</p>
</div>
<div className='btns-add-del'>
    <button className='btn-modify' onClick={() => props.edit(i.id)} ><i className='fa fa-edit'></i></button>
    <button className="btn-delete" onClick={() => props.deletetodo(i.id)} ><i className="fa fa-trash"></i></button>
</div>        
</li> */}