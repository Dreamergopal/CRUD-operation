import axios from "axios";

const api = axios.create({
  baseURL: `https://jsonplaceholder.typicode.com`,
});

// create method

export const apiData = () => {
  return api.get("/posts");
};

// delete method

export const deletePost = (id) => {
  return api.delete(`/posts/${id}`);
};

// post method

export const postData = (data) => {
    return api.post(`/posts`, data)
}

// put / patch method

export const editPost = (id, data) => {
  return api.put(`posts/${id}`, data)
}