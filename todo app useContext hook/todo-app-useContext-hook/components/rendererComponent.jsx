
import Context from "../contexts/context_for_input_add_btn_add_todos.js";

import { useContext } from "react";

function renderer(props)
{
    const {isCompleteUpdater} = useContext(Context);

    return(

        <div>
            <p>{props.task}</p>
            <button onClick={() => isCompleteUpdater(props.id)} > {(props.status)? "Completed" : "Not Completed"} </button>
        </div>
        
    );
}

export default renderer;