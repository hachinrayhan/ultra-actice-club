import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import Books from '../Books/Books';
import './Club.css'
import Details from '../Details/Details';
import { getTime } from '../Utilities/functions';


const Club = () => {
    let previousTime = 0;
    const [time, setTime] = useState(0);
    useEffect(() => {
        const newTime = getTime();
        previousTime = previousTime + newTime;
        setTime(previousTime);
    }, [])

    return (
        <div className='club'>
            <div className="library mt-5 mx-5">
                <div className='d-flex align-items-center'>
                    <h1 className='text-info me-2'><FontAwesomeIcon icon={faBookOpen} /></h1>
                    <h1 className='text-danger'>Online Reading Club</h1>
                </div>
                <h2 className='mt-4'>Select Your Favorite Book:</h2>
                <Books></Books>
            </div>
            <div className="details pt-5 ps-3 bg-light">
                <Details time={time}></Details>
            </div>
        </div>
    );
};

export default Club;