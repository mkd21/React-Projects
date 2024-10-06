
import { useState } from "react";

export const CustomHook = () =>{

    const [apiData , setData] = useState([]);
    const [inputData , updateinputData] = useState("");
    const [filteredCard , updateFilteredCard] = useState([]);
    const [lengthOfInputData , updateLength] = useState(0);

    function exec()
    {
        const filteredPokemon = apiData.filter((val) =>{
            if(val.name == inputData.toLowerCase()) return val;
        });

        updateFilteredCard(filteredPokemon);
        updateLength(inputData.length);
    }


    return [apiData , setData ,  inputData , updateinputData , filteredCard , exec , lengthOfInputData];
}

export default CustomHook;