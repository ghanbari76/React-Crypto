import TableRow from "./TableRow";

//Styles
import styles from "./TableCoin.module.css"

const TableCoin = ({ coins }) => {
    return (
        <div className={styles.container}>
            <table>
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
                    <TableRow coin={coin} key={coin.id} />
                )}
                </tbody>
            </table>
        </div>
    );
};

export default TableCoin;

