
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://movie-review-website-pied.vercel.app/api/v1/",
  headers: {
    Accept: "application/json",
    "Accept-Encoding": "identity"
  },
  withCredentials: true
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
