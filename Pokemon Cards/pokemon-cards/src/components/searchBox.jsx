
export const SearchPokemon = ({updateinput}) =>{
    return(
        <input style={{marginLeft : "41%"}} className=" placeholder-black border-b-2 bg-slate-300 mb-14 w-72 h-9 rounded-xl pl-4 mt-14" type="text" placeholder="Search Pokemon..." onChange={(e) => updateinput(e.target.value)}/>
    );
}