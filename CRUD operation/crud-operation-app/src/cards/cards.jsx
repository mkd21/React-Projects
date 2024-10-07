
import { useContext, useState } from "react";
import { ContextData } from "../contexts/createContext";


// responsive css style for cards 

import "../styles/responsive style code/cards_responsive.css";

export const Cards = () =>{

    const {stateData , dataDelete , editDataInMain , updateTheData } = useContext(ContextData);

    const [isEditing , updateIsEditing] = useState(false);
    const [idStorage , updateIdStorage] = useState(null);

    return(
        <>
            {
                stateData.map((val) => {

                    return(

                        <div key={val.id} className=" responsive_cards border-l-4 mb-3 border-gray-200 bg-slate-300 rounded-lg">

                            <section id="idSection" className="ml-6 mb-3 mt-3">
                                <h2>{val.id}</h2>
                            </section>

                            <section id="titleSection" className="ml-6 mb-3">
                                {
                                    (val.id == idStorage && (isEditing)) ? <input type="text" value={val.title} onChange={(e) => editDataInMain({title : e.target.value , id : val.id , body : val.body})}/> 
                                                                            : 
                                                                            <p className="font-bold">Title : {val.title} </p>
                                }
                            </section>

                            <section id="descriptionSection" className="text-center ml-2 mr-2 mb-3">
                                {
                                    (val.id == idStorage && (isEditing)) ? <textarea rows={7} cols={50} value={val.body} onChange={(e) => editDataInMain({body : e.target.value , id : val.id , title : val.title})}/> 
                                                                            : 
                                                                            <p>{val.body}</p> 
                                }
                            </section>

                            <section className="mt-6 mb-5 text-center">

                                <button className="bg-emerald-600 text-blue-100 mr-5 w-20 p-2 rounded-3xl" onClick={(e) => {
                                    updateIdStorage(val.id);
                                    updateIsEditing(!isEditing);

                                    (e.target.textContent == "Save" && updateTheData({id : val.id , title : val.title , body : val.body}));
                                }}>

                                    {(isEditing) ? "Save" : "Edit"}
                                    
                                </button>

                                <button className="bg-red-600 text-yellow-200 w-20 p-2 rounded-2xl" onClick={() => dataDelete(val.id)}>
                                    Delete
                                </button>

                            </section>

                        </div>

                    );
                })
            }

        </>

    );
}