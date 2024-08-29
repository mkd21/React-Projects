
import { useState } from "react";
import Context from "../contexts/creatingContext.js";
import Name_Phone_display from "./nameEmailPhoneDisplay.jsx";


let userDatas = {firstName : "" , LastName : "" , userEmail : "" , Contact_Number : "" , userPassword : ""};

let parent = () => {

    const [data , updateData] = useState(userDatas);

    function handleData(e)
    {
        // this will set the data and will trigger re-render at each entry
        const {name , value} = e.target;

        updateData({...data , [name] : value});

        console.log([name] , value);


        // this will also set the data in object but will not trigger re-rendering
        // const {name} = e.target;

        // data[name] = e.target.value;
    }

    function handleSubmit(e)
    {
        e.preventDefault();
        console.log(data);
    }

    return(

        <>
          
            <Context.Provider value={data}>
                <Name_Phone_display />
            </Context.Provider>


            <div style = {{width : "24%"}}>

                <div className="pr-3 pl-3 bg-yellow-50 shadow-2xl shadow-slate-400">

                    <section className="border-solid pt-2" >
                        <h1 className = "text-3xl" >Sign Up</h1>
                        <p className="mt-1.5" >Please fill the form to create an account</p>
                    </section>

                    <section className = "mt-1.5">
                        <form onSubmit={ handleSubmit}>

                            <label htmlFor="first" className="w-full">FirstName</label>
                            <input type = "text" id = "first" name= "firstName" placeholder = "Firstname" className="w-full mb-1.5 bg-blue-100"  onChange={(e) => handleData(e)} value={data.firstName} />

                            <label htmlFor="last" className="w-full" >LastName</label>
                            <input type = "text" id = "last" name = "LastName" placeholder = "Lastname" className="w-full mb-1.5 bg-blue-100" value={data.LastName} onChange={(e) => handleData(e)}/>
                            
                            <label htmlFor = "emailId" className="w-full" >Email</label>
                            <input type = "email" id = "emailId" placeholder = "Email..." name = "userEmail" className="w-full mb-1.5 bg-blue-100" value={data.userEmail} onChange={(e) => handleData(e)} />

                            <label htmlFor = "secret" className="w-full" >Password</label>
                            <input type = "password" id ="secret" placeholder = "Password" name = "userPassword" className="w-full mb-1.5 bg-blue-100" value={data.userPassword} onChange={(e) => handleData(e)} />

                            <label htmlFor = "number" className="w-full" >Contact Number</label>
                            <input type = "phone" name ="Contact_Number" id = "number" placeholder = "Contact no." className="w-full mb-1.5 bg-blue-100" value={data.Contact_Number} onChange={(e) => handleData(e)} />

                            <button className="bg-blue-500 border-solid w-full mb-3 mt-5 h-9 rounded text-center" style = {{color : "white"}} >Sign Up</button>

                        </form>
                    </section>

                </div>

            </div>

        </>

    );

}

export default parent;