import React, { useEffect, useState } from 'react';
import '../Styles/SearchBar.css';
import axios from 'axios';
import Card from './Card.jsx';


const SearchBar = () => {
    const [sneakers, setSneakers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const [result,setResult] = useState("Most Popular")

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
                setErrorMsg("Failed to fetch sneaker data.");
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
              limit: '20'
            },
            headers: {
              'x-rapidapi-key': process.env.REACT_APP_API_KEY,
              'x-rapidapi-host': 'sneaker-database-stockx.p.rapidapi.com'
            }
          };
          
          try {
              const response = await axios.request(options);
              console.log(response.data);

            if(response.data == null){
                setSneakers([]);
                setErrorMsg("Sorry, No Results for: "+searchTerm);
                setResult("Results for: "+searchTerm);
            }
            else{
                setSneakers(response.data);
                setResult("Results for: "+searchTerm);
                setErrorMsg(null);

            }

             
          } catch (error) {
              console.error(error);
          }

    }



    return (
        <>
            <div className='search'>
                <p>What Apparel would you like to search for?</p>
                <input type="text" placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className='submit' onClick={handleSearch}>Search</button>
            </div>
            

            
            <div className='shoeList'>
                <h2>{result}</h2>

                {errorMsg === null? (
                    sneakers.map((sneaker, index) => (

                        <Card 
                            name={sneaker.shoeName} 
                            thumbnail={sneaker.thumbnail} 
                            price={sneaker.retailPrice} 
                            brand={sneaker.brand} 
                            stockXPrice= {sneaker.lowestResellPrice?.stockX ?? 'N/A'}
                            stockXLink= {sneaker.resellLinks?.stockX ?? '#'}
                            flightClubPrice= {sneaker.lowestResellPrice?.flightClub ?? 'N/A'}
                            flightClubLink= {sneaker.resellLinks?.flightClub ?? '#'}
                            goatPrice= {sneaker.lowestResellPrice?.goat ?? 'N/A'}
                            goatLink= {sneaker.resellLinks?.goat ?? '#'}
                            description={sneaker.description ?? 'No description available.'}
                            key={index}
                        />
                    ))
                ) : (<p id="err">{errorMsg}</p>)}
                
            </div>
        </>
    );
};

export default SearchBar;
