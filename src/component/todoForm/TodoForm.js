import React, { useState } from "react";
import { setTodo } from "../../redux/todoSlice/todoSlice";
import {  useDispatch, useSelector } from "react-redux";


import './TodoForm.css'

function TodoForm(){
    const dispatch = useDispatch();
    const todoData = useSelector(function(appstate){
        return appstate.TodoReducer
    })
    console.log(todoData.todo);
    const [inputState , setInputState] = useState('');

    const handleChange = function(e){
        setInputState(e.target.value)
    }
// const check = dispatch(setTodo())
// console.log(check);

const addTodo = ()=>{
    dispatch(setTodo(inputState))
    setInputState('')
    
}
    return(<>
    <div>
    <input value={inputState} placeholder="Enter Todo Here" onChange={handleChange}/>
    <button onClick={function(){dispatch(addTodo)}}>Add Todo</button>
    </div>
    </>)
}


export default React.memo(TodoForm);