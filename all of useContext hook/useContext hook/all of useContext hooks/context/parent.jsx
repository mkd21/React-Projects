
import UserContextProvider from "./userContextProvider";

import Profile from "../components/profile.jsx";
import User from "../components/user.jsx";

function parent()
{

    return(
        <>
            <UserContextProvider>
                <User />
                <Profile />
            </UserContextProvider>
        </>
        
    );

}

export default parent;