import { RotatingLines } from "react-loader-spinner";

import TableRow from "./TableRow";

//Styles
import styles from "./TableCoin.module.css"

const TableCoin = ({ coins, isLoading, setChart }) => {
    return (
        <div className={styles.container}>
            { isLoading ? (
            <span className={styles.spinner}>
                <RotatingLines strokeColor="#3874ff" strokeWidth="3"/>
                <h2>Loading ...</h2>
            </span>
        ): (            
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Coin</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>24h</th>
                        <th>Total Volume</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {coins.map( coin => 
                    <TableRow coin={coin} key={coin.id} setChart={setChart} />
                )}
                </tbody>
            </table>)}
        </div>
    );
};

export default TableCoin;

