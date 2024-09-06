
import Context from "../contexts/todo-context.js";
import { useContext, useState } from "react";

function funk(props)
{
    const [isEditing , updateIsEditing] = useState(false);

    const {dispatch , isTaskComplete, updateTask} = useContext(Context);

    function deleteTodo(data)
    {
        dispatch({type : "deleteTodo" , payload : {id : data}})
    }

    function editTodo(receivedData , id)
    {
        dispatch({type : "editTodo" , payload : {newTask : receivedData , targetId : id}})
    }

    function markCompleteOrIncomplete(targetID)
    {
        dispatch({type : "workCompleted" , payload : {usefulId : targetID}})
    }

    return(

        <>
            <div>
                <p> {props.taskNumber }</p>

                <h3>
                    {
                        (isEditing) ? <input type="text" value = {props.task} onChange={(e) => editTodo(e.target.value , props.taskNumber)}  /> : props.task
                    }
                </h3>

                            {/* converted a boolean value to string value */}
                <button onClick={() => {
                    markCompleteOrIncomplete(props.taskNumber);
                }}>
                    {props.taskStatus}
                </button>

                <button onClick={() => deleteTodo(props.taskNumber) }>Delete</button>

                <button onClick={ () => updateIsEditing(!isEditing) }> {(isEditing) ? "Save" : "Edit"} </button>
            </div>
        </>

    );
}

export default funk;