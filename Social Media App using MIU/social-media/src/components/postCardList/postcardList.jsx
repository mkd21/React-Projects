
import { useEffect, useState } from "react";
import Cards from "../cards.jsx";

import axios from "axios";


function CardList(){

    const [responseData , updateResponseData] = useState([]); 

    useEffect( () =>{
        // axios.get("https://dummyjson.com/products")
        // .then( (res) => {
        //     updateResponseData([...res.data.products]);
        // })
        // .catch( (err) => {
        //     console.log(err);
        // })

        async function funk()
        {
            let res = await axios.get("https://dummyjson.com/products")
            console.log(import.meta.env.VITE_SECRET_KEY);
            console.log(import.meta.TOP_secret);
            
            updateResponseData([...res.data.products]);
        }

        funk();

    } , []);

    return (
        <>
           {
                (responseData.length == 0) ? "loading...." :

                responseData.map( (val) => <Cards 
                                            key={val.id} 
                                            productTitle = {val.title} 
                                            prodDesc = {val.description} 
                                            prodCategory = {val.category}
                                            brand = {val.brand}
                                            prodRating = {val.rating}
                                            prodImage = {val.images[0]}
                                            prodTags = {val.tags[1]}
                                        />)
           }
        </>
    );
}

export default CardList;
