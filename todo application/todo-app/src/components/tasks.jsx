
import "../css/task_parent.css";
import Final_comp from "./finalComp.jsx";

let task = ({taskArr , updateTodo , deleteTodo})=>{

    return(
        <ul>
            {
                taskArr.map((iterator , idx) => {
                        return <li key={idx}  id="taskParent">{ <Final_comp todoTask = {iterator.task} id = {idx} updaterFunction = {updateTodo} todoTaskDelete = {deleteTodo}/> }</li>
                })
            }
        </ul>
    );
}

export default task;