import React from 'react';
//Gif
import spinner from "../gif/Spinner.gif"

const Loader = () => {
    return (
        <div>
            <img src={spinner} alt='loading' />
            <h1>Loading ...</h1>
        </div>
    );
};

export default Loader;