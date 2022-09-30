import React from 'react';
import { getTime } from '../Utilities/functions';

const Book = (props) => {
    const { picture, name, author, time } = props.book;
    return (
        <div className="col">
            <div className="card">
                <img src={picture} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Name: {name}</h5>
                    <h5 className="card-title">Author: {author}</h5>
                    <p className="card-text">Time Required: {time} hrs</p>
                </div>
                <button onClick={() => getTime(time)} className="btn btn-primary">Add to List</button>
            </div>
        </div>
    );
};

export default Book;