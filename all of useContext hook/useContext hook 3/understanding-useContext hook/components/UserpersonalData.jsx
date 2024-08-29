
import { useContext } from "react";
import userContext from "../contexts/createContext.js";

function PersonalData()
{
    let {Name , Gender} = useContext(userContext);

    return(
        <>
            <h1>My name is {Name} and i am {Gender}</h1>
        </>
    );
}

export default PersonalData;