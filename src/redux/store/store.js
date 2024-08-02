import { configureStore } from "@reduxjs/toolkit";

import TodoReducer from '../todoSlice/todoSlice'


const store = configureStore({
    reducer : {
        TodoReducer,
    }
})


export default store;