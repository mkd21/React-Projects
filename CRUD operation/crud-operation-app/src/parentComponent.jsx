
import {useEffect, useState} from "react";

import {Cards} from "./cards/cards.jsx";

import {getData , deleteData , addData} from "../api/myApi.jsx";

import {ContextData} from "./contexts/createContext.js";

import SearchBar from "./searchBar/searchBar.jsx";

const Parent = () =>{

    const [stateData , updateData] = useState([]);
    const [addDataVariable , updateAddData] = useState({title : "" , body : ""});


    useEffect( () => {
        
        const dataFetch = async() =>{
            let res = await getData();
            updateData([...res.data]);        
        }

        dataFetch();

    } , []);

    async function dataDelete(id)
    {
        try{
            const res = await deleteData(id);
            if(res.status == 200){
                const newFilteredData = stateData.filter((val) => {
                    return val.id != id;
                })
                updateData(newFilteredData);
            }
        }
        catch(err){
            console.log(err);
        }   
    }

    async function addTheData(){

    }

    return(
        
        <>
            <SearchBar />

            <div style={{display : "flex", flexWrap : "wrap", justifyContent : "space-around", padding: "0px 50px 0px 50px"}}>

                {
                    (stateData.length == 0) ? "Loading Data..." :
                    <ContextData.Provider value={{stateData , addDataVariable , updateAddData}}>
                        <Cards />
                    </ContextData.Provider>
                }
                
            </div>
        </>
    );

}

export default Parent;