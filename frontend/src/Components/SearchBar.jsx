import React, { useEffect, useState } from 'react';
import '../Styles/SearchBar.css';
import axios from 'axios';
import Card from './Card.jsx';

/*
File: Searchbar.jsx
Author: Shayaan Kashif
Purpose: Handles retreving data from the API on load and when user makes a search request and rendering it to the screen
Dependencies: Axios, dotenv
Last Updated: November 17th 2024
*/

/* 
----------Variables Overview-----------
sneakers: Meant to hold the data from the API
setSneakers: Used to update sneakers value
searchTerm: Used to store what apparel the user wants to search for
setSearchTerm:  Used to update searchTerms value
errorMsg: Used to store any error messsages 
setErrorMsg: used to update teh value of errorMsg
result: Used to print what the user searched for 
setResult: Used to update results value
popularCount: Used to track the number of times the most popular button is cliked in order to re-render the effect of the useEffect hook
setPpoularCount: Used to update teh value of popularCount
*/



const SearchBar = () => {
    const [sneakers, setSneakers] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMsg, setErrorMsg] = useState(null);
    const [result, setResult] = useState("Most Popular");
    const [popularCount,setPopularCount] = useState(0);

    useEffect(() => {
        const fetchShoesFromDatabase = async () => {
            const options = {
                method: 'GET',
                url: 'http://localhost:8080/getShoes'
            };

            const response = await axios.request(options);
            setSearchTerm("");
            setResult("Most Popular");
            console.log(response.data);
            setSneakers(response.data);
        };
        
        console.log("Testing")
        fetchShoesFromDatabase();
       
    }, [popularCount]);

    useEffect(() => {
        function resizeCardContainer() {
            let maxWidth = window.innerWidth;
            let container = document.querySelector(".shoeList");
            if (!container)
            {
                return;
            }
            let widthOfParent = Math.min(document.querySelectorAll(".shoeList > .card").length, Math.floor(maxWidth / 462)) * 462;
            container.style.width = widthOfParent + "px";
        }
        resizeCardContainer();
        window.removeEventListener("resize", resizeCardContainer);
        window.addEventListener("resize", resizeCardContainer);
    });


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

    const handleKeyPress = (e)=>{
        if(e.key === "Enter"){
            handleSearch();
        }
    }

    const handleMostPopular = ()=>{
        setPopularCount(popularCount+1);
        setErrorMsg(null);

        
    }



    return (
        <>
            <div className='search'>
                <p>What Apparel would you like to search for?</p>
                <input type="text" placeholder='Search...' value={searchTerm} onKeyDown={handleKeyPress} onChange={(e) => setSearchTerm(e.target.value)}/>
                <button className='submit' onClick={handleSearch}>Search</button>
                <button className='popular' onClick={handleMostPopular}>Most Popular</button>
            </div>
            

            <h2>{result}</h2>
            <div className='shoeListContainer'>
                <div className='shoeList'>
                    
                    {errorMsg === null? (
                        sneakers.map((sneaker, index) => (

                            <Card 
                                name={sneaker.name} 
                                thumbnail={sneaker.thumbnail} 
                                price={sneaker.price} 
                                brand={sneaker.brand} 
                                stockXPrice= {sneaker.stockXPrice ?? null}
                                stockXLink= {sneaker.stockXLink ?? null}
                                flightClubPrice= {sneaker.flightClubPrice ?? null}
                                flightClubLink= {sneaker.flightClubLink ?? null}
                                goatPrice= {sneaker.goatPrice ?? null}
                                goatLink= {sneaker.goatLink ?? null}
                                description={sneaker.description ?? 'No description available.'}
                                key={index}
                            />
                        ))
                    ) : (<p id="err">{errorMsg}</p>)}
                    
                </div>
            </div>
            
        </>
    );
};

export default SearchBar;
