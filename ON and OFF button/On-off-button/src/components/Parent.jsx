import {useState} from "react";

import "../css files/parentStyle.css";
import "../css files/buttonStyle.css";
let parent = () => {

    const [isOn , updateIsOn] = useState(false);

    return(

        <section id ={(isOn) ? "parent_on" : "parent_off"} >

            <button onClick={() => updateIsOn(!isOn)} id = {(isOn) ? "button_on" : "button_off"} > { (isOn) ? "ON" : "OFF" }</button>

        </section>
    );
}

export default parent;