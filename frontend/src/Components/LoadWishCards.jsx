import React, { useEffect, useState } from 'react';
import WishCards from './WishCards';
import '../Styles/LoadWishCards.css';

const LoadWishCards = () => {
    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const Key = `Wishlist`;
        const storedShoes = JSON.parse(localStorage.getItem(Key)) || [];
        setSneakers(storedShoes);
    }, []);

    return (
        <div className='loadWish'>
            {sneakers.map((sneaker, index) => (
                <WishCards 
                    key={index}
                    title={sneaker.title} 
                    thumbnail={sneaker.thumbnail} 
                    price={sneaker.price} 
                    brand={sneaker.brand} 
                    stockXPrice={sneaker.stockXPrice}
                    stockXLink={sneaker.stockXLink}
                    flightClubPrice={sneaker.flightClubPrice}
                    flightClubLink={sneaker.flightClubLink}
                    goatPrice={sneaker.goatPrice}
                    goatLink={sneaker.goatLink}
                />
            ))}
        </div>
    );
};

export default LoadWishCards;
