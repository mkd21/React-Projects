import { useState } from "react";
import Icon from "../IconsComp/icons.jsx";

function render({moveUpdater , id , displayIcon , winnerDecided})
{

    return(
        <>                          
                                    {/* conditional rendering */}
            <div onClick = {() => { winnerDecided == "" && displayIcon == "" && moveUpdater(id)}} >
                <Icon Name = {displayIcon}/>
            </div>
        </>
         
    );
}

export default render;