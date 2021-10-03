import React from 'react';

const Aunty = (props) => {
    const {house} = props;
    return (
        <div>
            <h1>Aunty</h1>
            <p>House: {house}</p>
        </div>
    );
};

export default Aunty;