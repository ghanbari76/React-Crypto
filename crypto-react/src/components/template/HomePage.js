import React, { useState, useEffect } from 'react';

// API
import { getCoinList } from '../../services/api';

// Components
import Pagination from '../modules/Pagination';
import TableCoin from '../modules/TableCoin';
import Search from '../modules/Search';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [currency,setCurrency] = useState("usd");

    useEffect(() => {
        setIsLoading(true);
        const fetchAPI = async () => {
            try {
                const data = await getCoinList(page, currency);
                setCoins(data);
                setIsLoading(false);         
            } catch (error) {
                console.log(error);
            }
        }

        fetchAPI()
    },[page, currency])

    return (
        <>
            <Search currency={currency} setCurrency={setCurrency} />
            <TableCoin coins={coins} isLoading={isLoading}/>
            <Pagination page={page} setPage={setPage} />
        </>
    );
};

export default Landing;