
import "../css/customMedia.css";

export const SearchPokemon = ({updateinput , searchFunction }) =>{

    return(

        <div className="custom_searchBar" style={{position : "sticky" , top : "0px" , margin : "23px 0px 34px 0px"}}>
            <input style={{paddingLeft : "22px"}}

            type="text" 
            placeholder="Search Pokemon..." 
            onChange={(e) => updateinput(e.target.value)}


            className=" placeholder-black 
            border-b-2 
          bg-slate-300
            w-72 
            h-14
            rounded-xl 

            lg:w-3/5

            md:w-96

            2xl:pl-4

            "/>

            <button onClick={searchFunction} className="ml-3 h-14 rounded-2xl pl-3 pr-3 bg-green-400">Search Pokemon</button>

        </div>
    );
}