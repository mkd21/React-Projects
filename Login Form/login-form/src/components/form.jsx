
import {useState} from "react";

import passwordValidator from "../helper functions/passwordValidator.js";
import emailValidator from "../helper functions/emailValidator.js";

import "../css files/parentBoxStyle.css";
import "../css files/inputFieldStyle.css";

let form = () =>{

    const [datas , manageValues] = useState({email : "" , password : ""});

    function validatePassword()
    {
        let password = datas.password;
        if(passwordValidator(password)) console.log("password is strong");
        else console.log("password is not following the guidelines");

    }

    function validateEmail()
    {
        let email = datas.email;
        if(emailValidator(email)) console.log("email is valid");
        else console.log("invalid email");
    }

    function handleSubmit(event)
    {
        event.preventDefault();
        console.log(datas);
        validatePassword();
        validateEmail();
    }


    return(

        <div className="parentBox">

            <form onSubmit = {(event) => handleSubmit(event)}>

                <div className="inputFieldsClass">
                    <input type = "text" placeholder = "Email..." onChange={(e) => manageValues( {...datas , email : e.target.value} )}/>
                </div>

                <div className="inputFieldsClass">
                    <input type = "password" placeholder = "Password..." onChange={(e) => manageValues( {...datas , password : e.target.value} )} />
                </div>

                <div>
                    <input type = "submit" />
                </div>

            </form>

        </div>
    );
}

export default form;