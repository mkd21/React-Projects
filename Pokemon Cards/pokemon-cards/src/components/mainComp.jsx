
import {useState , useEffect} from "react";

import { getData , getDetailedData} from "../api/apiFile.js";

import {CardRenderer} from "./cards.jsx";

import {SearchPokemon} from "./searchBox.jsx";

import Loader from "./loader.jsx";

export const Cards = () =>{

    const [apiData , setData] = useState([]);
    const [inputData , updateinputData] = useState("");

    useEffect(() => {
        async function dataGetter() {
            try 
            {
                const res = await getData;
                const detailsArr = res.data.results;

             // this is a async function called inside a map so it will return a promise
                const urlData = detailsArr.map( async(val) => {
                    const res = await getDetailedData(val.url);
                    return res.data;
                });
                const resolvePromiseArr = await Promise.all(urlData);
                setData(resolvePromiseArr);
            }
            catch(err){ 
                console.log("message is",err);
            }
        }
        dataGetter();

    } , []);

    const filteredData = apiData.filter((val) => {
        if(val.name.includes(inputData))
            return val;
    });

    return(

        <>
            <h1 className="text-5xl" style={{marginLeft : "34%" , marginTop : "23px" , textShadow : "3px 4px 6px grey"}}>Let's Catch Pokemon...</h1>

            <SearchPokemon updateinput = {updateinputData}/>
            {
                (apiData == "") ? <Loader />
                :
                    <div className="">

                            <div className="flex flex-wrap ml-12 ">
                                {
                                    (filteredData.length == 0) ? <h1 className="text-2xl">Pokemon not Available..</h1>
                                    :
                                    filteredData.map((val) => <CardRenderer key={val.id} 
                                                        pokemonImage = {val.sprites.other.dream_world.front_default}
                                                        pokemonName = {val.forms[0].name}
            
                                                        abilities = {
                                                                        (val.abilities.length > 1) ? [val.abilities[0].ability.name , val.abilities[1].ability.name] 
                                                                        : 
                                                                        [val.abilities[0].ability.name , ""]
                                                                    }

                                                        height = {val.height}
                                                        weight = {val.weight}
                                                        speed = {val.stats[5].base_stat}
                                                        Experience = {val.base_experience}
                                                        Attack = {val.stats[1].base_stat}
                                                        type = {val.types[0].type.name}
                                                        />)
                                }
                            </div>
                    </div>
            }         
        </>  
    );

}