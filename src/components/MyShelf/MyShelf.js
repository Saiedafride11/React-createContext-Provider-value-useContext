import React from 'react';
import Special from '../Special/Special';

const MyShelf = (props) => {
    const {house} = props;
    return (
        <div>
            <h1>MyShelf</h1>
            <p>House: {house}</p>
            <Special></Special>
        </div>
    );
};

export default MyShelf;