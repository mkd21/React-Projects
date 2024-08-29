
import { useContext } from "react";
import DLContext from "../dark-light-mode-context/dark-light-mode-context.js";

function card()
{
    console.log("rerender ho rhe hai bro...");
    const {theme} = useContext(DLContext); 
    console.log("theme ka value hai",theme);
    
    return(
        <div style={{width : "400px" , height : "200px", backgroundColor : theme , border : "1px solid black"}}></div>
    );
}

export default card;