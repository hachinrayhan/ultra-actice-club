import { faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Details = () => {
    return (
        <div>
            <h1>
                <FontAwesomeIcon icon={faUserLarge} />
            </h1>
            <div>
                <h4>Hasin Rayhan</h4>
                {/* <FontAwesomeIcon icon={ } /> */}
            </div>
        </div>
    );
};

export default Details;