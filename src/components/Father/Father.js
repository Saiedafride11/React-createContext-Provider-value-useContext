import React from 'react';
import Brother from '../Brother/Brother';
import MyShelf from '../MyShelf/MyShelf';
import Sister from '../Sister/Sister';

const Father = (props) => {
    const {house} = props;
    return (
        <div>
            <h1>Father</h1>
            <h5>House: {house}</h5>
            <div style={{display:'flex'}}>
                <Brother house={house}></Brother>
                <MyShelf house={house}></MyShelf>
                <Sister house={house}></Sister>
            </div>
        </div>
    );
};

export default Father;