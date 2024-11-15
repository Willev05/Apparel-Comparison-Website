import React, { useEffect, useState,useContext } from 'react';
import WishCards from './WishCards';
import '../Styles/LoadWishCards.css';
import { ApparelContext } from '../Context/ApparelContext';

const LoadWishCards = () => {

    const {loadChange, setLoadChange} = useContext(ApparelContext);

    const [sneakers, setSneakers] = useState([]);

    useEffect(() => {
        const Key = `Wishlist`;
        const storedShoes = JSON.parse(localStorage.getItem(Key)) || [];
        setSneakers(storedShoes);
    }, [loadChange]);

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
