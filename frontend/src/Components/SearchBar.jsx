import React from 'react';
import '../Styles/SearchBar.css';

const SearchBar = () => {

  return (
    <>
    <div className='search'>
        <p>What Shoe would you like to search for?</p>
        <input type="text" placeholder='Search...'></input>
        <button className='submit'>Search</button>
    </div>

    
    
    </>
  );
};

export default SearchBar;
