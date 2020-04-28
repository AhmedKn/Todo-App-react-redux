const addtodo = (state = [] , action) =>

{
    switch (action.type){
        case 'ADD_TODO' : return [action.todos,...state];

              case 'DELETE' :return state = state.filter(el => action.id !== el.id) 
             
              
              case 'COMPLETED' : return  state.map(i =>
                i.id === action.id ?{...i, completed  : !i.completed,className:'Lined',
                classcheck:'fa fa-check-circle',
                itemSection : 'item-section-Lined'} : i
              ) 

              case 'NOT_COMPLETED' : return state.map(j => j.id === action.id? {...j , completed : !j.completed , className:'Not-Lined',
              classcheck:'fa fa-circle',
              itemSection : 'item-section-notLined'}:j)

              case 'EDIT': return state.map(el =>el.id===action.id? {...el , isEditable : !el.isEditable} : el )
             
              case 'UPDATE' : return state.map(el => el.id===action.data.id? {...el , isEditable : !el.isEditable , todo : action.data.todo}: el)
        
        default : return state
    }
}

export default addtodo;



