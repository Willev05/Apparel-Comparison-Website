import React, { useEffect, useState } from 'react';
import '../Styles/SearchBar.css';
import axios from 'axios';
import Card from './Card.jsx';


const SearchBar = () => {
    const [sneakers, setSneakers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPopularSneakers = async () => {
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

        fetchPopularSneakers();
    }, []);


    const handleSearch = async()=>{
        const options = {
            method: 'GET',
            url: 'https://sneaker-database-stockx.p.rapidapi.com/getproducts',
            params: {
              keywords: searchTerm,
              limit: '10'
            },
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_API_KEY,
              'x-rapidapi-host': 'sneaker-database-stockx.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);
              setSneakers(response.data);
          } catch (error) {
              console.error(error);
          }

    }



    return (
        <>
            <div className='search'>
                <p>What Shoe would you like to search for?</p>
                <input type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className='submit' onClick={handleSearch}>Search</button>
            </div>
            
            {error && <p>{error}</p>}
            
            <div>
                <h2>Most Popular Sneakers</h2>
                
                    {sneakers.map((sneaker, index) => (
                        
                          

                            <Card name = {sneaker.shoeName} thumbnail = {sneaker.thumbnail} price = {sneaker.retailPrice} brand = {sneaker.brand} key = {index}></Card>


                        
                    ))}
                
            </div>
        </>
    );
};

export default SearchBar;
