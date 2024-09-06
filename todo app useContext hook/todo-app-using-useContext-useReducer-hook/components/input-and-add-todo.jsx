
import { useContext, useState } from "react";
import Context from "../contexts/todo-context.js";

function inputAddTodoComponent()
{
    const [textData , updateData] = useState("");

    const {dispatch , isTaskComplete} = useContext(Context);

    function addTodo()
    {
        dispatch({ type : "addTodo" , payload : {work : textData} });
    }

    function deleteallTodo()
    {
        dispatch({type : "deleteAll"});
    }

    return(

        <>
            <input type="text" placeholder = "enter your task.." onChange={(e) => updateData(e.target.value)} />

            <button onClick={addTodo}>Add Todo</button>

            <button onClick={deleteallTodo}>Delete All</button>
        </>

    );
}


export default inputAddTodoComponent;