import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-GYCPmpxsoB28JraN4q4mVfvF";

const getCoinList = async (page) => {
    const response = await axios.get(`${BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=${page}&x-cg-pro-api-key:${API_KEY}`);
    return response.data;
}

export { getCoinList };