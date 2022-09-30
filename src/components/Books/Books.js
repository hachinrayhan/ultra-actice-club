import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
    const [books, setBooks] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => (setBooks(data)))
    }, [])
    return (
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                books.map(book => <Book book={book} key={book.id}></Book>)
            }
        </div>
    );
};

export default Books;