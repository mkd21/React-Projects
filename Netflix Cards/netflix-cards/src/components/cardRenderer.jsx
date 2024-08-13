

const Render = (props) =>{

    return(

        <div id = "card-parentDiv" className="w-full p-7" style={{"height" : "27rem"}}>

            <section>
                <img src={props.movieImage} alt="movie image" />
            </section>

            <section style={{"margin": "22px 0px 0px 0px"}}>
                <p>{props.movieName}</p>
                <p>Rating: {props.movieRating}</p>
            </section>

            <section className="overflow-x-hidden h-20" style={{"margin": "19px 0px 0px 0px"}}>
                <p>{props.movieDescription}</p>
            </section>

            <section>
                <button className="bg-red-600 rounded p-2 mt-3"> <a href= {props.movieWatchLink}> Watch Now</a> </button>
            </section>

        </div>

    );

}

export default Render;