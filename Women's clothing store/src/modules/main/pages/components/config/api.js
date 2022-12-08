import axios from "axios";

const fetchProducts = async () => {
  try {
    const response = await axios.get("https://api.npoint.io/15fb0bd35ab0ab4a7a28");
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const fetchProduct = async (productId) => {
  try {
    const response = await axios.get(`https://api.npoint.io/15fb0bd35ab0ab4a7a28/${productId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

const api = { fetchProducts, fetchProduct };

export default api;
