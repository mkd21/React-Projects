import {useState} from "react";

let inputAndAddtodo = ({updateList , deleteAll}) => {
    // console.log(updateList);
    const [todoValue , updateTodoValue] = useState("");
    
    return(
       <section className=" h-16 flex mb-10 items-center justify-between">
            <div>
                <input className=" h-9 w-80 pl-3 rounded-2xl border-hidden" type="text" placeholder = "Write task" value={todoValue} onChange={(e) => updateTodoValue(e.target.value)}/>
            </div>
            <div>
                <button className={ (todoValue.length == 0) ? "rounded-md border-hidden bg-red-400 p-2 cursor-not-allowed opacity-70" : "rounded-md border-hidden bg-red-400 p-2"} 
                        onClick={ () => {
                                            if(todoValue.length == 0) return;
                                            updateList(todoValue);
                                            updateTodoValue("");
                                        } 
                                }> 
                    Add Todo
                </button>

            </div>

            <div>
                <button className="rounded-md border-hidden bg-purple-400 p-2" onClick={deleteAll}  >Delete All</button>
            </div>
       </section>
    );
}

export default inputAndAddtodo;