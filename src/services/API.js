import axios from "axios";

const BASE_URL = "http://yoozify.herokuapp.com/";

const getBlogs = async () => {
    const response = await axios.get(`${BASE_URL}/blog/detail/{{blog_id}}/`);
    return response.data;
}

export {getBlogs};