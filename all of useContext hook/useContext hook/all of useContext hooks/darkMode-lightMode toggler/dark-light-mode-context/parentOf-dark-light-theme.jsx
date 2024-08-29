
import Dark_Light_context_Provider from "./dark-light-mode-provider";

import Card from "../components/card.jsx";
import Button from "../components/button.jsx";

function Parent()
{
    return(
        <Dark_Light_context_Provider>
            <Card/>
            <Button/>
        </Dark_Light_context_Provider>
    );
}

export default Parent;