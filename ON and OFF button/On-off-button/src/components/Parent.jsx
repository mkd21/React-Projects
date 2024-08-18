import {useState} from "react";

import "../css files/parentStyle.css";
import "../css files/buttonStyle.css";
import "../css files/bodyStyle.css";

let colorOff = { "backgroundColor" : "white" }
let colorOn = { "backgroundColor" : "black" }

let parent = () => {

    const [isOn , updateIsOn] = useState(false);

    return(

        <div className="bg-body " style={(isOn) ? colorOn : colorOff}>

            <section id ={(isOn) ? "parent_on" : "parent_off"} >

                <button onClick={() => updateIsOn(!isOn)} id = {(isOn) ? "button_on" : "button_off"} > { (isOn) ? "ON" : "OFF" }</button>

            </section>

        </div>
        
    );
}

export default parent;