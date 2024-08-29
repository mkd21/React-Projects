
import React, { useState } from "react";

import UserContext from "./userContext";


const UserContextProvider = ({children}) => {

    const [user , updateUser] = useState(null);
    // console.log(user);
    return(

        <UserContext.Provider value = {{user , updateUser}}>
            {children}
        </UserContext.Provider>

    );
}

export default UserContextProvider;