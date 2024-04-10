import axios from "axios";

const BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&x-cg-pro-api-key: CG-GYCPmpxsoB28JraN4q4mVfvF';

const getCoin = async () => {
    const response = await axios.get(BASE_URL);
    return response.data;
}

export { getCoin };