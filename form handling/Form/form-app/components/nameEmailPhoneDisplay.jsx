
import { useContext } from "react";
import Context from "../contexts/creatingContext.js";

let DataDisplay = () =>{

    const {firstName , LastName , Contact_Number} = useContext(Context);

    return (

        <div style={{position: "absolute" , top : "32px" , width :"50%" , left : "25%" , display : "flex"}}>

            <span className="flex-1" >First name: {firstName}</span>
            <span className="flex-1" >Last name: {LastName}</span>
            <span style={{flexGrow : "0.6"}}>Phone: {Contact_Number}</span>

        </div>
    );
}

export default DataDisplay;