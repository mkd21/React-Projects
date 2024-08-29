
import TodoRenderer from "./rendererComponent.jsx";

import Context from "../contexts/context_for_input_add_btn_add_todos.js";

import { useContext } from "react";

function display()
{
    const {todoarray , isTaskComplete} = useContext(Context);

    return(
        todoarray.map( (val , idx) => <TodoRenderer key = {idx} id = {val.id} task = {val.task} status = {isTaskComplete} /> )    
    );
}

export default display;