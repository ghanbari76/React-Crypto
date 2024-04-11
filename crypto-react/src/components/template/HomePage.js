import React, { useState, useEffect } from 'react';

// API
import { getCoinList } from '../../services/api';

// Components
import Loader from '../Loader';

//Styles
import styles from "./HomePage.module.css"; 
import TableCoin from '../modules/TableCoin';

const Landing = () => {

    const [coins, setCoins] = useState([]);
    const [search,setSearch] = useState(" ");
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoinList();
            setCoins(data)
        }

        fetchAPI()
    },[])

    const searchHandler = event => {
        setSearch(event.target.value)
    }
    // const searchedCoins = coins.filter(coin => coin.name.toLowerCase().include(search.toLowerCase()))

    return (
        <>
            <input className={styles.input} type="text" placeholder="Search" value={search} onChange={searchHandler} />
            <TableCoin coins={coins} />
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