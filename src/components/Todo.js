import React,{useState} from 'react';
import {AiFillDelete,AiFillEdit} from 'react-icons/ai'
import TodoForm from './TodoForm';



function Todo({todos,completedTodo,removeTodo,updateTodo}) {
    const [edit, setEdit]=useState({id:null,value:''});

    const submitUpdate=(value)=>{

        updateTodo(edit.id,value);
        setEdit({id:null,value:''});


    }

    if(edit.id){
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }
    return todos.map((todo,index)=>(
        <div key={index} className={todo.isComplete ? 'todo-row compeleted' : 'todo-row'}>

            <div key={todo.id} onClick={()=>completedTodo(todo.id)}>
                {todo.text}
            </div>

            <div className="icons">
            <AiFillDelete 
            className="delete-icon" 
            onClick={()=>removeTodo(todo.id)} />
            <AiFillEdit className="edit-icon" onClick={()=>setEdit({id:todo.id , value:todo.text})}/>
            </div>
        </div>
    ))

}

export default Todo
