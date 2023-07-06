import React from 'react';

const Coin = ({name,image,symbol,price,priceChange,marketCap}) => {
    return (
        <div>
            <img src={image} alt={name} />
            <span>{name}</span>
            <span>{symbol.toUppercase()}</span>
            <span>{price.toLocalString()}</span>
            <span>{priceChange.toFixed(2)}</span>
            <span>{marketCap.toLocalString()}</span>
        </div>
    );
};

export default Coin;