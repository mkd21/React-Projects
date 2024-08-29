import { useState } from "react";

import DlMode from "./dark-light-mode-context.js";


let themeManager = ({children}) =>{

    const [theme , changeTheme] = useState("white");

    return (
        <DlMode.Provider value={{theme , changeTheme}}>
            {children}
        </DlMode.Provider>
    );
}

export default themeManager;