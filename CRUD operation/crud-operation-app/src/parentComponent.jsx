
import {useEffect, useState} from "react";

import {Cards} from "./cards/cards.jsx";

import {getData} from "../api/myApi.jsx";

import {ContextData} from "./contexts/createContext.js";

import SearchBar from "./searchBar/searchBar.jsx";

const Parent = () =>{

    const [stateData , updateData] = useState([]);

    useEffect( () => {
        
        const dataFetch = async() =>{
            let res = await getData();
            updateData([...res.data]);        
        }

        dataFetch();

    } , []);

    return(

        <>
            <SearchBar />

            <div style={{display : "flex", flexWrap : "wrap", justifyContent : "space-around", padding: "0px 50px 0px 50px"}}>

                {
                    (stateData.length == 0) ? "Loading Data..." :

                    stateData.map((val) => {
                        const {id , title , body} = val;

                    return (
                        <ContextData.Provider key={val.id} value={{userId : id , title , body}}>
                            <Cards />
                        </ContextData.Provider>
                    )})
                }
                
            </div>
        </>
    );

}

export default Parent;