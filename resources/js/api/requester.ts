import axiosLib from 'axios';

const requester = axiosLib.create({
  baseURL: '/api',
  // withCredentials: true
  // timeout: 60000,
  // xsrfCookieName: "XSRF-TOKEN",
  // xsrfHeaderName: "X-XSRF-TOKEN",
  // headers: {
  //     Accept: "application/json"
  // }
});

// axios.interceptors.response.use(null, err => {
//     const error = {
//         status: err.response?.status,
//         original: err,
//         validation: {},
//         message: null,
//     };
//
//     if (err.response?.status === 422) {
//         for (let field in err.response.data.errors) {
//             error.validation[field] = err.response.data.errors[field][0];
//         }
//     } else {
//         error.message = "Something went wrong. Please try again later.";
//     }
//
//     return Promise.reject(error);
// });

export default requester;

// try {
//     await axios.get("/sanctum/csrf-cookie");
//     await axios.post("/login", form.value);
//     const {data} = await axios.get("/api/user");
//     user.value = data;
// } catch (err) {
//     error.value = err;
// }
