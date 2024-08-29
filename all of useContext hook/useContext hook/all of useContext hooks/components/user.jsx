
import {useContext , useState} from "react";

import UserContext from "../context/userContext.js";

function user()
{

    const [Username , setUsername] = useState("");
    const [Password , setPassword] = useState("");

    const {updateUser} = useContext(UserContext);

    let updateData = (e) =>{
        e.preventDefault();
        updateUser({Username : Username, Password});
    }

    return(

        <div>

            <h2>Login</h2>

            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} value={Username} />
            <input type="password" placeholder="password.." onChange={(e) => setPassword(e.target.value)} value={Password}/>
            <button onClick={updateData}>Submit</button>

        </div>

    );
}

export default user;