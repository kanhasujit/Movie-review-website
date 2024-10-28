import axios from "axios";

const get = async (url) => {
  const response = await axios.get(url, {
    headers: {
      Accept: "application/json",
      "Accept-Encoding": "identity"
    }
  });
  return response.data;
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
