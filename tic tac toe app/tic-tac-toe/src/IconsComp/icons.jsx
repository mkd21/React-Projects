import {FaRegCircle , FaPen , FaTimes} from "react-icons/fa";
import "./iconsStyle.css";

const eachCardStyles = {
    "width" : "100px",
    "height" : "100px",
    "border" : "1px solid red",
    "borderRadius" : "23%",
    "display" : "flex",
    "backgroundColor" : "yellow",
    "padding" : "34px",
    boxShadow : "4px 6px 7px #b607afc2"
};

function icons({Name})
{

    if(Name == "X")
    {
        return (     
            // <div className="eachCardStyle_usingSeperateFile_css">
            //     <FaTimes style={ {transform : "scale(6.5)" , "position" : "absolute", "top" : "78px",  "left" : "78px"} }/>
            // </div>

            <FaTimes style={eachCardStyles}/>
        );
    }
    else if(Name == "O")
    {
        return (
       
            <FaRegCircle style = {eachCardStyles} />
            
        );
    }
    else 
    {
        return(
                <FaPen style={eachCardStyles} />
        );  
    }

}

export default icons;