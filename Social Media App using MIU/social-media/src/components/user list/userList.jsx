
import { useEffect, useState } from "react";
import UsersListStructure from "./userListStructure.jsx";

import axios from "axios";

let userList = () =>{

    const [userData , updateUserData] = useState([]);

    useEffect( () => {

        axios.get("https://reqres.in/api/users")
        .then((res) => {
            const receivedData = res.data;
            console.log(receivedData.data);
            updateUserData([...receivedData.data])
        })
        .catch((errMessage) =>{
            console.log(errMessage);
        })

    } , [] );

    return(
        <>
           {
                (userData.length == 0) ? "loading data.." :
                userData.map((val) => <UsersListStructure key={val.id} userAvatar = {val.avatar} firstName = {val.first_name} />)
           }
        </>
    );
}

export default userList;