
import DarkLight_mode from "../dark-light-mode-context/dark-light-mode-context.js";

import { useContext } from "react";

function button()
{
    const {theme , changeTheme} = useContext(DarkLight_mode);

    function handleChange()
    {
        console.log("executed");
        console.log(theme);
        if(theme == "white")
        {
            changeTheme("black");
        }
        else 
        {
            console.log("entered the black section");
            changeTheme("white");
        }
    }

    return (
        <button onClick={handleChange}>
            Change Mode
        </button>
    );

}

export default button