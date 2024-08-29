import TestData from "../contexts/createContext.js";

import Child1 from "./child1.jsx";

function Parent()
{
    let Name = "Mayank";
    let Gender = "Male";

    return(

        <TestData.Provider value={{Name , Gender}}>
            <Child1 />
        </TestData.Provider>

    );
}

export default Parent;