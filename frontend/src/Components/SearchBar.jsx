import React, { useEffect, useState } from 'react';
import '../Styles/SearchBar.css';
import axios from 'axios';

const SearchBar = () => {
    const [sneakers, setSneakers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSneakers = async () => {
            const options = {
                method: 'GET',
                url: 'https://sneaker-database-stockx.p.rapidapi.com/mostpopular',
                params: { limit: '10' },
                headers: {
                    'x-rapidapi-key': process.env.REACT_APP_API_KEY,
                    'x-rapidapi-host': 'sneaker-database-stockx.p.rapidapi.com'
                }
            };

            try {
                const response = await axios.request(options);
                console.log(response.data);//For Testing
                setSneakers(response.data);
            } catch (error) {
                console.error(error);
                setError("Failed to fetch sneaker data.");
            }
        };

        fetchSneakers();
    }, []);

    return (
        <>
            <div className='search'>
                <p>What Shoe would you like to search for?</p>
                <input type="text" placeholder='Search...' />
                <button className='submit'>Search</button>
            </div>
            
            {error && <p>{error}</p>}
            
            <div>
                <h2>Most Popular Sneakers</h2>
                <ul>
                    {sneakers.map((sneaker, index) => (
                        <li key={index}>
                            <h3>{sneaker.name}</h3>
                            <img src={sneaker.thumbnail} alt={sneaker.name} width="150" height="150" />
                            <p>Price: ${sneaker.retailPrice}</p>
                            <p>Brand: {sneaker.brand}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default SearchBar;
