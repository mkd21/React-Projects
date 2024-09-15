
import {useEffect, useState} from "react";

import {Cards} from "./cards/cards.jsx";

import {getData , deleteData , addData , update} from "../api/myApi.jsx";

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

    async function addTheData(receivedValue){

        try{
            const res = await addData(receivedValue);
            if(res.status == 201)
            {
                updateData([...stateData , {id : stateData.length + 1 , title : res.data.title , body : res.data.body}]);
                updateAddData({title : "" , body : ""});
            }
        }
        catch(err){
            console.log("an error has occured",err);
        }
    }


    const editDataInMain =  (receivedData) =>{

        let updatedDataArr = stateData.map((val) => {
            if(receivedData.id == val.id)
            {
                return {...val , title : receivedData.title , body : receivedData.body};
            }
            return val;
        })

        updateData(updatedDataArr);
    }

    async function updateTheData(data)
    {
        console.log(data.id);
        try{
            const res = await update(data.id , stateData);
            console.log(res);
            console.log(res.status);
        }
        catch(errMessage){
            console.log("error message is",errMessage);
        }  
    }


    return(
        
        <>
            <ContextData.Provider value = {{addDataVariable , updateAddData , addTheData}}>
                <SearchBar />
            </ContextData.Provider>

            <div style={{display : "flex", flexWrap : "wrap", justifyContent : "space-around", padding: "0px 50px 0px 50px"}}>

                {
                    (stateData.length == 0) ? "Loading Data..." :

                    <ContextData.Provider value={{stateData , addDataVariable , dataDelete , updateData , editDataInMain , updateTheData}}>
                        <Cards />
                    </ContextData.Provider>
                }
                
            </div>
        </>
    );

}

export default Parent;