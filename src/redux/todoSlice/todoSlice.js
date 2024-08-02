import { createSlice } from "@reduxjs/toolkit";

const initialState ={
    todo : []
}
console.log(initialState.todo);
const TodoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers : {
        setTodo: (state , action)=> {
            console.log(state);
            state.todo.push(action.payload)
        },
        handleDelete : (state, action)=>{
            console.log('handling delete...', action.payload);
            state.todo.splice(action.payload, 1) 
        },
        // handleCompleted : (state, action)=>{
        //     // console.log( action.payload[0] , state.todo);
        //     // state.todo.forEach((str) => {
        //     //     str = `<u>${str}</u>`;
        //     //   });
         
        // }
    }
})
console.log(TodoSlice.actions);
export const { setTodo, handleDelete, handleCompleted } = TodoSlice.actions;
export default TodoSlice.reducer;