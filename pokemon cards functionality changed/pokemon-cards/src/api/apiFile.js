
import axios from "axios";

// const API = axios.create({
//     baseURL : "https://pokeapi.co/api/v2",
// });

// export const getData = () => {
//     return API.get("/pokemon", {params : {limit : 20}});
// }

export const getData = axios.get("https://pokeapi.co/api/v2/pokemon" , {params : {limit : 100}});

export const getDetailedData = (data) => {
    return axios.get(data);
}