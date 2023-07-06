import React from 'react';
//Style
import styles from "./Coin.module.css";

const Coin = ({name,image,symbol,price,priceChange,marketCap}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={image} alt={name} />
            <span className={styles.name}>{name}</span>
            <span className={styles.symbol}>{symbol.toUppercase()}</span>
            <span className={styles.currenPrice}>{price.toLocalString()}</span>
            <span className={priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange}>{priceChange.toFixed(2)}</span>
            <span>{marketCap.toLocalString()}</span>
        </div>
    );
};

export default Coin;