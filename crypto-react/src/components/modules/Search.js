import React, { useEffect, useState } from 'react';
import { searchCoin } from '../../services/api';

const Search = ({ currency, setCurrency }) => {
    const [text,setText] = useState("");
    const [coins,setCoins] = useState([]);

    useEffect(() => {
        if(!text) return;

        const search = async () => {
            const response = await fetch(searchCoin(text));
            const json = await response.json();
            console.log(json);
            if (json.coins) setCoins(json.coins);
        }

        search()
    } ,[text]);

    return (
        <div>
            <input 
                type="text"
                placeholder="Search"
                value={text}
                onChange={event => setText(event.target.value)}
            />
            <select value={currency} onChange={event => setCurrency(event.target.value)}>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="jpy">JPY</option>
            </select>
        </div>
    );
};

export default Search;