
import Context_for_input_addTodo_btn_add_todos from "../contexts/context_for_input_add_btn_add_todos.js";


import Input_add_todo_Component from "./inputAndAddTodoButton.jsx";

import Display from "./displayTodoComponent.jsx";

import {useState} from "react";


const todoArray = [
    // {id : 1 , task : "todo 1" , isCompleted : true},
    // {id : 2 , task : "todo 2" , isCompleted : false},
    // {id : 3 , task : "todo 3" , isCompleted : true}
];

let parent = () =>{

    const [todoarray , updateTodoArray] = useState(todoArray);

    const [isTaskComplete , updateTaskStatus] = useState(false);

    function addTodoItems(receivedData)
    {
        updateTodoArray( [...todoarray , {id : todoarray.length + 1 , task : receivedData , isCompleted : isTaskComplete}] );
    }

    function isCompleteUpdater(receivedId)
    {
        todoarray.map( (val) => {

            if(val.id == receivedId)
            {
                updateTaskStatus(true);
            }
        })
    }

    return(

        <div>
            <Context_for_input_addTodo_btn_add_todos.Provider value={ {todoarray , addTodoItems , isTaskComplete , isCompleteUpdater} }>

                <Input_add_todo_Component  />
                <Display  />

            </Context_for_input_addTodo_btn_add_todos.Provider>
            
        </div>

    );
}

export default parent;