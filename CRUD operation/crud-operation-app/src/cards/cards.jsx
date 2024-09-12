
import "../styles/cardParent.css";

import { useContext } from "react";
import { ContextData } from "../contexts/createContext";

export const Cards = () =>{

    const {userId ,  title , body , dataDelete} = useContext(ContextData);

    
    return(

        <div className="cardParent border-l-4 border-gray-200 bg-slate-300 rounded-lg">

            <section id="idSection" className="ml-6 mb-3 mt-3">
                <h2>{userId}</h2>
            </section>

            <section id="titleSection" className="ml-6 mb-3">
                <p className="font-bold">
                    Title : {title}
                </p>
            </section>

            <section id="descriptionSection" className="ml-6 mb-3">
                <p>
                   {body} 
                </p>
            </section>

            <section className="mt-6 ml-6 mb-5">
                <button className="bg-emerald-600 text-blue-100 mr-5 w-20 p-2 rounded-3xl">
                    Edit
                </button>

                <button className="bg-red-600 text-yellow-200 w-20 p-2 rounded-2xl" onClick={() => dataDelete(userId)}>
                    Delete
                </button>
            </section>

        </div>


    );

}