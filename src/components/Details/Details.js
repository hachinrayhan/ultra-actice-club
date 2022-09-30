import { faLocationDot, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Details = () => {
    return (
        <div className='d-flex'>
            <h1 className='me-3'>
                <FontAwesomeIcon icon={faUserLarge} />
            </h1>
            <div className='lh-1'>
                <h5>Hasin Rayhan</h5>
                <div>
                    <FontAwesomeIcon className='me-2' icon={faLocationDot} />
                    <span>Dhaka, Bangladesh</span>
                </div>
            </div>
        </div>
    );
};

export default Details;