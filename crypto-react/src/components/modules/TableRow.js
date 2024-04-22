//style
import styles from "./TableRow.module.css";

const TableRow = ({
    coin : {
        image,
        symbol,
        name,
        current_price,
        total_volume,
        market_cap,
        price_change_percentage_24h : price_change, 
    },
    setChart,
}) => {

    const showHandler = () => {
        setChart(true);
    }
    return (
        <tr>
            <td>
                <div className={styles.symbol} onClick={showHandler}>
                    <img src={image} alt={name} />
                    <span >{symbol.toUpperCase()}</span>
                </div>
            </td>
            <td>{name}</td>
            <td>${current_price.toLocaleString()}</td>
            <td className={price_change > 0 ? styles.success : styles.error}>{price_change.toFixed(2)}%</td>
            <td>{total_volume.toLocaleString()}</td>  
            <td>{market_cap.toLocaleString()}</td>  
        </tr>
    )
 }

export default TableRow;