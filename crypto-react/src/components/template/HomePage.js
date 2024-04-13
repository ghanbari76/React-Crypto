import React, { useState, useEffect } from 'react';

// API
import { getCoinList } from '../../services/api';

// Components
import Pagination from '../modules/Pagination';
import TableCoin from '../modules/TableCoin';
import Search from '../modules/Search';

//Styles
import styles from "./HomePage.module.css"; 

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [search,setSearch] = useState(" ");
    const [page,setPage] = useState(1);
    const [currency,setCurrency] = useState("usd");

    useEffect(() => {
        setIsLoading(true);
        const fetchAPI = async () => {
            const data = await getCoinList(page, currency);
            setCoins(data);
            setIsLoading(false);
        }

        fetchAPI()
    },[page, currency])

    const searchHandler = event => {
        setSearch(event.target.value)
    }
    // const searchedCoins = coins.filter(coin => coin.name.toLowerCase().include(search.toLowerCase()))

    return (
        <>
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler} />
                <Search currency={currency} setCurrency={setCurrency} />
                <TableCoin coins={coins} isLoading={isLoading}/>
                <Pagination page={page} setPage={setPage} />
        </>
    );
};

export default Landing;