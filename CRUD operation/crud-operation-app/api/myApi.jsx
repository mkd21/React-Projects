
import axios from "axios";

const API = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com"
});


export const getData = () => {
    return API.get("/posts");
}

export const deleteData = (id) =>{
    return API.delete(`/posts/${id}`);
}   

export const addData = (data) =>{
    return API.post("/", data);
}