import { useState } from "react";
import "../css/parent_style.css";
import AddtodoComp from "./inputAndAddtodoComponent.jsx";
import Task_Comp from "./tasks.jsx";

//dummy array list. just for reference
let tasks = [
    {task : "task1" , id : 1},
    {task : "task2" ,  id : 2},
    {task : "task3" ,  id : 3}
];

function parent()
{
    const [contentArr , updateContent] = useState(tasks);

    function updater(data)
    {
        console.log(contentArr);
        updateContent([...contentArr , {task : data , id : contentArr.length + 1}]);
    }

    return (
        <div id = "parent">
            <AddtodoComp updateList = {updater}/>
            <Task_Comp taskArr = {contentArr} />
        </div>
    );
}

export default parent;