import React from 'react';

const Sister = (props) => {
    const {house} = props;
    return (
        <div>
            <h1>Sister</h1>
            <p>House: {house}</p>
        </div>
    );
};

export default Sister;