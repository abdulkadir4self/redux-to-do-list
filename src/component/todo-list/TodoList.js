import React from "react";

import {  useDispatch, useSelector } from "react-redux";
import { handleDelete , handleCompleted } from "../../redux/todoSlice/todoSlice"; 
function TodoList(){
   const todoDispatch = useDispatch();
   const TodoListData = useSelector(function(appstate){
    return appstate.TodoReducer.todo
   })
   console.log(TodoListData);

   const handleDelete2 = (e)=>{
    if(e.target == "deletebtn"){

    }
   }
   return (<>
   
   <ul>
    {TodoListData.map(function(value , index){
        return (<li key={index} > {value} 
        <span>
        <button  onClick={function(){todoDispatch(handleDelete(index))}} className="deletebtn">delete</button> 
        {/* <button onClick={function(){todoDispatch(handleCompleted(value))}}>done</button> */}
            </span> </li>)
    })}
   </ul>
   
   </>)
}

export default React.memo(TodoList);