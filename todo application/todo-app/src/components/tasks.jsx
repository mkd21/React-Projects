import "../css/task_parent.css";

let task = ({taskArr})=>{
    return(
        <ul>
            {
                taskArr.map((iter) => {
                    return <li id="taskParent" key={iter.id}>
                                <div style={{flexGrow : 1 , height : "42px" , padding : "8px 0px 0px 12px"}}>
                                    <p>{iter.task}</p>
                                </div>

                                <div style={{ display: "flex", justifyContent: "space-around",height : "40px", width : "250px"}}>
                                    <button className=" px-2 rounded-md bg-gray-800 text-slate-50">Edit</button>
                                    <button className=" px-2 rounded-md bg-orange-300">Delete</button>
                                    <button className=" px-2 rounded-md bg-lime-400">Completed?</button>
                                </div>
                            </li>
                })
            }
        </ul>
    );
}

export default task;