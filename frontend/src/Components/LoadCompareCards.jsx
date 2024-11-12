import React, { useEffect, useState } from 'react';
import '../Styles/LoadCompareCards.css';
import CompareCards from './CompareCards';

const LoadComparCards = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {

        const Key = `Compare List`;
        const storedShoes = JSON.parse(localStorage.getItem(Key)) || []; 


        setSneakers(storedShoes);
    }, []);

    console.log(sneakers);

  return (
    <>
        <div className='loadDiv'>
            <h2>Compare List</h2>

            {sneakers.map((sneaker, index) => (
                <CompareCards 
                    key={index}
                    title={sneaker.title}
                    thumbnail={sneaker.thumbnail}
                    price={sneaker.price}
                    brand={sneaker.brand}
                />
            ))}
        </div>
    
    </>
  );
};

export default LoadComparCards;
