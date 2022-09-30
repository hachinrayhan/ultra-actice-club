import { faLocationDot, faUserLarge } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Details.css'

const Details = () => {
    return (
        <div>
            <div className='d-flex'>
                <h1 className='me-3 text-primary'>
                    <FontAwesomeIcon icon={faUserLarge} />
                </h1>
                <div className='lh-1'>
                    <h5>Hasin Rayhan</h5>
                    <div>
                        <FontAwesomeIcon className='me-2 text-danger' icon={faLocationDot} />
                        <span>Dhaka, Bangladesh</span>
                    </div>
                </div>
            </div>
            <div className='border rounded p-2 mt-4'>
                <h5>Age: 25 years</h5>
                <h5>Interested In: Fiction</h5>
            </div>
            <div className='p-2 mt-4'>
                <h5>Add A Break</h5>
                <div className='border rounded p-3 d-flex justify-content-between'>
                    <span className='break-time border rounded-circle p-2'>05m</span>
                    <span className='break-time border rounded-circle p-2'>10m</span>
                    <span className='break-time border rounded-circle p-2'>15m</span>
                    <span className='break-time border rounded-circle p-2'>20m</span>
                </div>
            </div>
            <div className='p-2 mt-4'>
                <h5>Reading Details</h5>
                <p className='border rounded'>Required Time: </p>
                <p className='border rounded'>Break Time: </p>
            </div>
            <div className='text-center'>
                <button className='btn btn-primary'>Finish Reading</button>
            </div>
        </div>
    );
};

export default Details;