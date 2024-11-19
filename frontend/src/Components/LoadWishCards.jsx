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

    useEffect(() => {
        function resizeWishCardContainer() {
            let maxWidth = window.innerWidth;
            let container = document.querySelector(".loadWish");
            if (!container)
            {
                return;
            }
            let widthOfParent = Math.min(document.querySelectorAll(".loadWish > .card2").length, Math.floor(maxWidth / 562)) * 562;
            container.style.width = widthOfParent + "px";
        }
        resizeWishCardContainer();
        window.removeEventListener("resize", resizeWishCardContainer);
        window.addEventListener("resize", resizeWishCardContainer);
    });

    return (
        <div className='loadWishContainer'>
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
        </div>
    );
};

export default LoadWishCards;
