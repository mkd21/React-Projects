
import "../css/parent.css";


export const CardRenderer = ({pokemonImage , pokemonName , abilities, height , weight , speed , Experience , Attack , type}) =>{

    function firstCharacterToUpperCase(receivedString)
    {
        const modifiedString = receivedString.charAt(0).toUpperCase() + receivedString.slice(1 , receivedString.length);
        return modifiedString;
    }

    return(

        <div id="parent" className="w-80 mr-10 mb-14 rounded-xl shadow-xl shadow-slate-500">

            <section className=" pl-28">
                <figure className="w-28 h-36" >
                    <img src= {pokemonImage} alt = "pokemon image" style={{height : "100%"}}/>
                </figure>
            </section>
            
            <section className=" text-center font-bold text-2xl font-mono">
                <p> { firstCharacterToUpperCase(pokemonName) } </p>
            </section>

            <section className="mb-4 mt-4">
                <p className=" bg-green-600 rounded-full w-56 h-9 text-center font-semibold text-white ml-12 pt-1">
                    {
                        (abilities[1] != "") ?  `${abilities[0]} ,  ${abilities[1]}` : abilities[0]
                    }
                </p>
            </section>

            <section className="text-center">
                
                <section className="flex justify-around mb-4">
                    <span>
                        <p>{height}</p>
                        <p>Height</p>
                    </span>

                    <span>
                        <p>{weight}</p>
                        <p>Weight</p>
                    </span>

                    <span>
                        <p>{speed}</p>
                        <p>Speed</p>
                    </span>
                </section>

                <section className="flex justify-around mb-2">
                    <span>
                        <p>{Experience}</p>
                        <p>Experience</p>
                    </span>

                    <span>
                        <p>{Attack}</p>
                        <p>Attack</p>
                    </span>

                    <span>
                        <p>{type}</p>
                        <p>Type</p>
                    </span>
                </section>

            </section>

        </div>

    );

}