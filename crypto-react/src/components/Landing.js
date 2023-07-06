import React, { useState, useEffect } from 'react';

// API
import { getCoin } from '../services/api';

// Components
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search,setSearch] = useState(" ");
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }

        fetchAPI()
    }, [])

    const searchHandler = event => {
        setSearch(event.target.value)
    }
    const searchCoins = coins.filter(coin => coin.name.toLowercase().include(search.toLowercase()))

    return (
        <>
            <input type="text" placeholder="Search" value={search} onChange={searchHandler} />
            <div>
                {coins.length ? <div>{
                    searchCoins.map(coin => <Coin key={coin.id}
                        name = {coin.name}
                        image = {coin.image}
                        symbole = {coin.symbole}
                        price = {coin.current_price}
                        priceChange = {coin.price_change_percentage_24h}
                        marketCap = {coin.market_cap}
                        
                        />)
                }</div> : <Loader />}
                
             </div> 
        </>
    );
};

export default Landing;