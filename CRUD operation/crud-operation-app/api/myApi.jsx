
import axios from "axios";

const API = axios.create({
    baseURL : "https://jsonplaceholder.typicode.com",
});


export const getData = () => {
    return API.get("/posts");
}

// delete method
export const deleteData = (id) =>{
    return API.delete(`/posts/${id}`);
}   

// post method
export const addData = (data) =>{
    return API.post("/posts", data);
}

// updating the data 

export const update = (id , data) =>{
    return API.put(`/posts/${id}`, data);
}

// when we are working with URL then do not give useless spaces. it could result in unexpected errors