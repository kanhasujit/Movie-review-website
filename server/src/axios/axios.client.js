// import axios from "axios";

// const get = async (url) => {
//   const response = await axios.get(url, {
//     headers: {
//       Accept: "application/json",
//       "Accept-Encoding": "identity"
//     }
//   });
//   return response.data;
// };

// export default { get };

import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://movie-review-website-pied.vercel.app/api/v1/", // ✅ Centralized base URL
  headers: {
    Accept: "application/json",
    "Accept-Encoding": "identity"
  },
  withCredentials: true // ✅ Important for cookies/session data
});

const get = async (url) => {
  try {
    const response = await axiosInstance.get(url);
    return response.data;
  } catch (error) {
    console.error(`❌ GET Error on ${url}:`, error?.response?.data || error.message);
    throw error;
  }
};

export default { get };



// media.api.js

// import axios from 'axios';

// const mediaApi = {
//   getList: async (params) => {
//     try {
//       const response = await axios.get('/api/media/list', { params });
//       return { response: response.data, err: null };
//     } catch (error) {
//       return { response: null, err: error };
//     }
//   },
//   // other methods...
// };

// export default mediaApi;
