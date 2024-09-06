
import Context from "../contexts/todo-context.js";

import InputandAddTodo from "./input-and-add-todo.jsx";
import DisplayTodo from "./display-tasks.jsx";

import { useReducer, useState } from "react";


import Reducer from "../reducers/todoReducers.js";

function Parent()
{
    const [arr , dispatch] = useReducer(Reducer , []);

    return(

        <>
            <Context.Provider value={{arr , dispatch}}  >
                <InputandAddTodo />
                <DisplayTodo />
            </Context.Provider>
        </>

    );
}

export default Parent;