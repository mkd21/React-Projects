

function reducer(state , action)
{
    if(action.type == "addTodo")
    {
        return ([...state , {id : state.length + 1 , task : action.payload.work , taskStatus : "Mark as Complete"}])
    }
    else if(action.type == "deleteTodo")
    {
        let filteredArr = state.filter( (val , idx) => {

            if(idx + 1 != action.payload.id)
            {
                return state;
            }
        })

        filteredArr.map( (val , idx) => {
            
            return val.id = idx + 1;
        })

        return filteredArr;
    }
    else if(action.type == "editTodo")
    {
        let newState = state.map((val , idx) => {
            
            if(val.id == action.payload.targetId)
            {
                val.task = action.payload.newTask;
            }
            return val;
        });

        return newState;
    }
    else if(action.type == "deleteAll") return [];
    
    else if(action.type == "workCompleted")
    {
        let changedState = state.map( (val) => {
            if(val.id == action.payload.usefulId)
            {
                val.taskStatus = "Completed";
            }
            return val;
        })

        return changedState;
    }

    return state;
}

export default reducer;