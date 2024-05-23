import React, { useState } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, YAxis } from "recharts";

import { convertData } from '../../helpers/convertData';
//Style
import styles from "./Chart.module.css";

const Chart = ({ chart, setChart }) => {
    const [type, setType] = useState("prices");

    const typeHandler = (event) => {
        if (event.target.tagName === "BUTTON") {
            const type = event.target.innerText.toLowerCase().replace(" ", "_") 
            setType(type);
        }
    };

    return (
        <div className={styles.container}>
            <span className={styles.cross} onClick={() => setChart(null)}>
                X
            </span>
            <div className={styles.chart}>
                <div className={styles.name}>
                    <img src={chart.coin.image} alt='coin_name' />
                    <p>{chart.coin.name}</p>
                </div>
                <div className={styles.graph}>
                    <ChartComponent data={convertData(chart, type)} type={type} />
                </div>
                <div className={styles.types} onClick={typeHandler}>
                    <button className={type === "prices" ? styles.selected : null}>Prices</button>
                    <button className={type === "market_caps" ? styles.selected : null}>Market Caps</button>
                    <button className={type === "total_volumes" ? styles.selected : null}>Total Volumes</button>
                </div>
                <div className={styles.detailes}>
                    <div>
                        <p>Prices:</p>
                        <span>${chart.coin.current_price}</span>
                    </div>
                    <div>
                        <p>ATH:</p>
                        <span>${chart.coin.ath}</span>
                    </div>
                    <div>
                        <p>Market Cap:</p>
                        <span>{chart.coin.market_cap}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chart;

const ChartComponent = ({ data, type }) => {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <LineChart width={400} height={400} data={data} >
                <CartesianGrid stroke='#404042' />
                <Line type="monotone" dataKey={type} stroke="#3874ff" strokeWidth="2px" />
                <YAxis dataKey={type} domain={["auto", "auto"]} />
                <Legend />
                <Tooltip />
            </LineChart>
        </ResponsiveContainer>
    );
} 