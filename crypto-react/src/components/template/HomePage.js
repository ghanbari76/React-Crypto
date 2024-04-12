import React, { useState, useEffect } from 'react';

// API
import { getCoinList } from '../../services/api';

// Components
import Loader from '../Loader';
import Pagination from '../modules/Pagination';
import TableCoin from '../modules/TableCoin';

//Styles
import styles from "./HomePage.module.css"; 

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search,setSearch] = useState(" ");
    const [page,setPage] = useState(1);

    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoinList(page);
            setCoins(data)
        }

        fetchAPI()
    },[page])

    const searchHandler = event => {
        setSearch(event.target.value)
    }
    // const searchedCoins = coins.filter(coin => coin.name.toLowerCase().include(search.toLowerCase()))

    return (
        <>
        <Pagination page={page} setPage={setPage} />
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler} />
            {
                coins.length ?
                    <div className={styles.coinContainer}>
                        <TableCoin coins={coins} />
                    </div> :
                    <Loader />
                }
        </>
    );
};

export default Landing;