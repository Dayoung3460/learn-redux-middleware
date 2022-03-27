import axios from "axios";

export const getPost = id => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
}

export const getUser = () => {
    return axios.get(`https://jsonplaceholder.typicode.com/users`)
}