import axios from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3";
const API_KEY = "CG-scQZLcmrdMrdr33ofkWtjSes";

const getCoinList = async (page, currency) => {
    const response = await axios.get(`${BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&x-cg-pro-api-key:${API_KEY}`);
    return response.data;
}

export { getCoinList };