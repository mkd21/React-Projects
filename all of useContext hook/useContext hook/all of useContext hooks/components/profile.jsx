
import { useContext} from "react";

import UserDetails from "../context/userContext";

function profile()
{
    const {user} = useContext(UserDetails);

    return (

        <div>
            {(user) ? <h2>Welcome {user.Username}</h2> : <h2>Please Login</h2>}
        </div>
    );
}

export default profile;