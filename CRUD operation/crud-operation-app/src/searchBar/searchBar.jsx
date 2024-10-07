
import { useContext } from "react";

import { ContextData } from "../contexts/createContext";


// common css code 

import "../styles/common style code/searchbar_bgstyle.css";

// responsive css code import 

import "../styles/responsive style code/searchbar_responsive.css";

function searchBar() {

  const {addDataVariable , updateAddData , addTheData} = useContext(ContextData);

  return (

    <div className="rounded-2xl mt-6 mb-6 sticky top-0 responsiveSearchBar searchbar_bg_color">

        <input type="text" placeholder="Add Title" className="responsiveAddTitle pl-2 h-10 rounded-2xl" value={addDataVariable.title} onChange={(e) => updateAddData({...addDataVariable , title : e.target.value})}/>
    
        <textarea className="pl-2 pt-3 rounded-2xl responsiveAddBody" placeholder="Add Body" rows={5} cols={20} value={addDataVariable.body} onChange={(e) => updateAddData({...addDataVariable , body : e.target.value}) } />

        <button

          disabled = { (addDataVariable.title.length == 0 || addDataVariable.body.length == 0) }  // disabled attribute expects a boolean value (true or false) so acc. to the condition the values will be assigned to the attribute. koi ek ka bhi length 0 hoga toh true rhega value which means ki button disabled rhega

          className = {(addDataVariable.title.length == 0) || (addDataVariable.body.length == 0) ? "cursor-not-allowed bg-red-500 h-14 rounded-2xl text-white responsiveButton" : " bg-green-300 h-14 rounded-2xl responsiveButton" }

          onClick={() => {addTheData(addDataVariable)}} 

        > ADD </button>

    </div>

  );
}

export default searchBar
