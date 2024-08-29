
import Context from "../contexts/toggler-context.js";
import { useContext } from "react";


let comp1 = () =>
{
    const val = useContext(Context);
    console.log(val);
    return (
        <div>
            <h1>Text is {val} </h1>
        </div>
    );
}

export default comp1;