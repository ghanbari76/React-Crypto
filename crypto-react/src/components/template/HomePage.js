import React, { useState, useEffect } from 'react';

// API
import { getCoinList } from '../../services/api';

// Components
import Pagination from '../modules/Pagination';
import TableCoin from '../modules/TableCoin';
import Search from '../modules/Search';
import Chart from '../modules/Chart';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const [page,setPage] = useState(1);
    const [currency,setCurrency] = useState("usd");
    const [chart,setChart] = useState(null);

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
        <div>
            <Search currency={currency} setCurrency={setCurrency} />
            <TableCoin coins={coins} isLoading={isLoading} setChart={setChart} />
            <Pagination page={page} setPage={setPage} />
            {!!chart && <Chart chart={chart} setChart={setChart} />}
        </div>
    );
};

export default Landing;