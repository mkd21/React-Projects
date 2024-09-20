
import "../css/parent.css";


export const CardRenderer = ({pokemonImage , pokemonName , abilities, height , weight , speed , Experience , Attack , type}) =>{

    function firstCharacterToUpperCase(receivedString)
    {
        const modifiedString = receivedString.charAt(0).toUpperCase() + receivedString.slice(1 , receivedString.length);
        return modifiedString;
    }

    return(

        <div id="parent">

            <section className="bg-orange-200 pl-28">
                <figure className="w-28 h-36" >
                    <img src= {pokemonImage} alt = "pokemon image" style={{height : "100%"}}/>
                </figure>
            </section>
            
            <section className="bg-red-500 text-center font-bold text-2xl font-mono">
                <p> { firstCharacterToUpperCase(pokemonName) } </p>
            </section>

            <section className="mb-4 mt-4">
                <p className="bg-green-600 rounded-full w-44 h-9 text-center font-semibold text-white ml-20 pt-1">
                    {
                        (abilities[1] != "") ?  `${abilities[0]} ,  ${abilities[1]}` : abilities[0]
                    }
                </p>
            </section>

            <section className="bg-green-400 grid grid-cols-3">
                <p>Height: {height} </p>
                <p>Weight: {weight} </p>
                <p>Speed: {speed} </p>
                <p>Experience: {Experience} </p>
                <p>Attack: {Attack} </p>
                <p>Abilities: {type} </p>
            </section>

        </div>

    );

}