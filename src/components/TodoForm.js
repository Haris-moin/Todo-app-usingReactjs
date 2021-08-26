import React, { useState,useEffect,useRef } from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('');

    const inputRef= useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    })
    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('');
    }
    return (
        <form onSubmit={handleSubmit} className="todo-form">
            {props.edit ? (
                <>
                <input placeholder="Update your item" 
                value={input}
                onChange={e => setInput(e.target.value)}
                name="text"
                ref={inputRef}
                className="todo-input edit" />
                <button className="todo-button edit"
                onClick={handleSubmit} >Update</button>
                </>
            ): (
                <>
                <input
                type="text"
                placeholder="Add Todo"
                onChange={e => setInput(e.target.value)}
                value={input}
                className="todo-input"
                ref={inputRef}
                name="text" />

            <button className="todo-button">Add Todo</button>


                </>
            )}
        </form>
    )
}

export default TodoForm
