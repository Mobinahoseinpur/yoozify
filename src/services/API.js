import axios from "axios";

const BASE_URL = "http://yoozify.herokuapp.com";

const getBlogs = async () => {
    const response = await axios.get(`${BASE_URL}/blog/list/`);
    // console.log(response.data);
    return response.data.results;
}

// const postContactUs = async () => {
//     const response = await axios.post(`${BASE_URL}/contact-us/`);
//     console.log(response.data);
//     return response.data.results;
// }


// axios({
//     method: "post",
//     url: "${BASE_URL}/contact-us/",
//     data: bodyFormData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });

export {getBlogs};