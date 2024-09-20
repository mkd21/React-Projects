
import {useState , useEffect} from "react";

import { getData , getDetailedData} from "../api/apiFile";

import {CardRenderer} from "./cards.jsx";


export const Cards = () =>{

    const [apiData , setData] = useState(null);

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

    console.log(apiData);
    return(

        <>
            {
                (apiData == null) ? <h1>Loading...</h1>
                :
                    <div className="bg-blue-300">
                            <div className="flex flex-wrap ">
                                {
                                    apiData.map((val) => <CardRenderer key={val.id} 
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