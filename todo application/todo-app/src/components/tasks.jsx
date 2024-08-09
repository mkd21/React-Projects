
import "../css/task_parent.css";
import Final_comp from "./finalComp.jsx";

let task = ({taskArr , updateTodo})=>{

    return(
        <ul>
            {
                taskArr.map((iterator) => {
                        return <li key={iterator.id}  id="taskParent">{ <Final_comp todoTask = {iterator.task} id = {iterator.id} updaterFunction = {updateTodo}/> }</li>
                })
            }
        </ul>
    );
}

export default task;