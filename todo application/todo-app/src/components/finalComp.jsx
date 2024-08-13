import { useState } from "react";

import "../css/task_parent.css";


const finalComp = ({todoTask , id , updaterFunction , todoTaskDelete}) =>{
    // console.log(id);
    const [isEditing , updateStatus] = useState(false);
    const [completed , updateCompleted] = useState(false);


    let exec = (e) =>{
        updaterFunction({newTask : e.target.value , relatedId : id});
    }

    return(

        <>
            <div style={{flexGrow : 1 }}>
                {
                    (isEditing) ? <input className="ml-3 w-64 rounded-lg pl-3 placeholder:italic placeholder:text-zinc-950" type="text" value={todoTask} onChange={(e) => exec(e)} /> 
                    : 
                    <p className={ (completed) ? "pl-4 font-medium capitalize line-through" : "pl-4 font-medium capitalize "}>{todoTask}</p>
                }
            </div>

            <div style={{ display: "flex", justifyContent: "space-around",height : "40px", width : "250px"}} >

                <button onClick={() => updateStatus(!isEditing)}  className=" px-2 rounded-md bg-gray-800 text-slate-50">{(isEditing)? "Save" : "Edit"}</button>

                <button onClick={() => {
                    todoTaskDelete(id)
                    updateCompleted(false);
                    
                    }} className=" px-2 rounded-md bg-orange-300">Delete</button> 

                <button onClick={() => updateCompleted(true)} className="px-2 rounded-md bg-lime-400">{(completed) ? "Already Done" :  "Completed?" }</button>
                
            </div>
        </>

    );
}

export default finalComp;