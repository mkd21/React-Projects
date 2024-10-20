
import SeriesData from "../api/seriesapi.json";

import RenderCards from "./cardRenderer.jsx";

let parent = () =>
{
    
    return( 
        <>
            <ul className="grid grid-cols-3" style={{ "margin":"0px 0px 0px 157px"}}>
                {
                    SeriesData.map((iterator , idx) => <li key={idx} className="w-80 mr-3 mt-3 ">
                    { 
                        <RenderCards movieName = {iterator.name}  
                                     movieImage = {iterator.img_url} 
                                     movieRating = {iterator.rating} 
                                     movieDescription = {iterator.description}
                                     movieWatchLink = {iterator.watch_url}
                        /> 
                    }  
                    </li> )
                }
            </ul>
        </>
    );
}

export default parent;
