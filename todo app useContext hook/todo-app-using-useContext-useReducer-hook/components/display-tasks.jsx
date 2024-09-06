
import { useContext } from "react";
import Context from "../contexts/todo-context.js";

import Renderer from "./render.jsx";

function displayTasks()
{
    const {arr} = useContext(Context);
    return(
        <>
            {
                arr.map( (val , idx) => <Renderer key = {val.id} taskNumber = {val.id} task = {val.task} taskStatus = {val.taskStatus} />)
            }
        </>
    );
}

export default displayTasks;
