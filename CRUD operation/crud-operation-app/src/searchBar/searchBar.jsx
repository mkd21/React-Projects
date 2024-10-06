
import { useContext } from "react";

import { ContextData } from "../contexts/createContext";

function searchBar() {

  const {addDataVariable , updateAddData , addTheData} = useContext(ContextData);

  return (

    <div className="bg-red-300 rounded-2xl p-1 mt-6 mb-6 sticky top-0" style={{width : "600px" , height : "150px" , marginLeft : "30%", display : "flex", alignItems : "center" , justifyContent : "center"}}>

        <input type="text" placeholder="Add Title" className="mr-3 pl-2 h-10 rounded-2xl" value={addDataVariable.title} onChange={(e) => updateAddData({...addDataVariable , title : e.target.value})}/>
    
        <textarea className="mr-3 pl-2 pt-3 rounded-2xl" placeholder="Add Body" rows={5} cols={20} value={addDataVariable.body} onChange={(e) => updateAddData({...addDataVariable , body : e.target.value}) } />

        <button

          disabled = { (addDataVariable.title.length == 0 || addDataVariable.body.length == 0) }  // disabled attribute expects a boolean value (true or false) so acc. to the condition the values will be assigned to the attribute. koi ek ka bhi length 0 hoga toh true rhega value which means ki button disabled rhega

          className = {(addDataVariable.title.length == 0) || (addDataVariable.body.length == 0) ? "cursor-not-allowed bg-red-500 w-24 h-14 rounded-2xl text-white" : " bg-green-300 w-24 h-14 rounded-2xl" }

          onClick={() => {addTheData(addDataVariable)}} 

        > ADD </button>

    </div>

  );
}

export default searchBar
