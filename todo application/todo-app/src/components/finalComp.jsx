import { useState } from "react";

import "../css/task_parent.css";


const finalComp = ({todoTask , id , updaterFunction}) =>{

    const [isEditing , updateStatus] = useState(false);

    let exec = (e) =>{
        updaterFunction({newTask : e.target.value , relatedId : id});
    }

    return(

        <>
            <div style={{flexGrow : 1 }}>
                {
                    (isEditing) ? <input className="ml-3 w-64 rounded-lg pl-3 placeholder:italic placeholder:text-zinc-950" type="text" value={todoTask} onChange={(e) => exec(e)} /> : <p className="pl-4 font-medium capitalize">{todoTask}</p>
                }
            </div>

            <div style={{ display: "flex", justifyContent: "space-around",height : "40px", width : "250px"}} >

                <button onClick={() => updateStatus(!isEditing)}  className=" px-2 rounded-md bg-gray-800 text-slate-50">{(isEditing)? "Save" : "Edit"}</button>
                <button className=" px-2 rounded-md bg-orange-300">Delete</button> 
                <button className=" px-2 rounded-md bg-lime-400">Completed?</button>
                
            </div>
        </>

    );
}

export default finalComp;