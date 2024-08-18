import { useEffect, useState } from "react";

import "../css/parent_style.css";
import InputandAddTodo from "./inputAndAddtodo.jsx";
import Task_Comp from "./tasks.jsx";

//dummy array list. just for reference
// let tasks = [
//     {task : "task1" ,  id : 0},
//     {task : "task2" ,  id : 1},
//     {task : "task3" ,  id : 2}
// ];
 
function parent()
{
    function getData()
    {
        let retrievedData = JSON.parse(localStorage.getItem("items"));
        // console.log(retrievedData);

        if(retrievedData) return retrievedData;
        else return [];
    }

    const [contentArr , updateContent] = useState(getData);

    useEffect( () =>{
        localStorage.setItem("items" , JSON.stringify(contentArr));
    } , [contentArr]);
    

    function updater(data)
    {
        updateContent([...contentArr , {task : data , id : contentArr.length}]);
        console.log(contentArr);
    };

    function editTodoFunction(data)
    {
        contentArr.map((iterator) => {
            if(data.relatedId == iterator.id)
            {
                iterator.task = data.newTask;
                updateContent([...contentArr]);
            }
        })
    }

    function deleteTodoExecutor(data)
    {
        let newtaskArray = contentArr.filter((iter) => iter.id != data);
        let arrayWithUpdatedIndex = newtaskArray.map((iterator , index) => {
            return {task : iterator.task , id : index}
        })

        updateContent(arrayWithUpdatedIndex);
    }

    let alltodoDeleter = () =>{
        updateContent([]);
    }

    return (
        <div id = "parent">
            <InputandAddTodo updateList = {updater} deleteAll = {alltodoDeleter} />
            <Task_Comp taskArr = {contentArr} updateTodo = {editTodoFunction} deleteTodo = {deleteTodoExecutor} />
        </div>
    );

}

export default parent;