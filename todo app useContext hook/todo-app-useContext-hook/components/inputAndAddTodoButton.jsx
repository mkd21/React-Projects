import { useState , useContext } from "react";

import Context from "../contexts/context_for_input_add_btn_add_todos.js";

function inputAnd_AddtodoButton()
{
    const [data , updateData] = useState("");

    const {addTodoItems} = useContext(Context);
    
    return(
        <div>
            <input type="text" value = {data} onChange={(e) => updateData(e.target.value)}/>
            <button onClick={() => addTodoItems(data)} >Add Todo</button>
        </div>
    );
}

export default inputAnd_AddtodoButton;