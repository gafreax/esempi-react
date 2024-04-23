import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: [{
        id: 20240422195421,
        text: "Learn React",
    },
    {
        id: 20240422195623,
        text: "Learn React",
    }
    ,{
        id: 20240422195426,
        text: "Learn Redux"
    }],
};

const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            console.log(action);
            state.tasks.push({ id: Date.now(), text: action.payload });
        },
        deleteTodo: (state, action) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload);
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;