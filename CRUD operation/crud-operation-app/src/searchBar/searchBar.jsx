
import { useContext } from "react";

import { ContextData } from "../contexts/createContext";

function searchBar() {

  const {addDataVariable , updateAddData , addTheData} = useContext(ContextData);

  return (

    <div className="bg-slate-500 p-1 mt-6 mb-6" style={{width : "484px" , marginLeft : "34%"}}>

        <input type="text" placeholder="Add Title" className="mr-3 pl-2" value={addDataVariable.title} onChange={(e) => updateAddData({...addDataVariable , title : e.target.value})}/>

        <input type="text" placeholder="Add Body" className="mr-3 pl-2" value={addDataVariable.body} onChange={(e) => updateAddData({...addDataVariable , body : e.target.value}) }/>

        <button
          className = 
          {
            (addDataVariable.title.length == 0) || (addDataVariable.body.length == 0) ? "cursor-not-allowed bg-red-500 w-16 text-white" : "bg-green-300 w-16"
          }
          onClick={() => addTheData(addDataVariable)} 

          > ADD </button>

    </div>

  );
}

export default searchBar
