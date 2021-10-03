import React from 'react';

const Uncle = (props) => {
    const {house} = props;
    return (
        <div>
            <h1>Uncle</h1>
            <p>House: {house}</p>
        </div>
    );
};

export default Uncle;