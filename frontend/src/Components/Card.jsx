import '../Styles/card.css';
import comparepic from '../assets/compare.209x256.png';
import heartOutline from '../assets/heartoutline2.png';
import heartFilled from '../assets/heartFilled.png';
import React, {useEffect, useState} from 'react';

function Card(props){


const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
const existingCompareShoes = JSON.parse(localStorage.getItem("Compare List")) || [];

const [compareState, setCompareState] = useState("notCompare");

// Initialize heartState directly in useState, then set it in useEffect
const [heartState, setHeartState] = useState(heartOutline);

useEffect(() => {
    let isFavorited = existingWishlist.some(apparel => apparel.title === props.name);
    let isCompare = existingCompareShoes.some(apparel => apparel.title === props.name);
    setHeartState(isFavorited ? heartFilled : heartOutline);
    setCompareState(isCompare ? "inCompare" : "notCompare");
}, [props.name]);


const handleAddWishList = () => {
    const index = existingWishlist.findIndex(item => item.title === props.name);
    if (index !== -1) {
        existingWishlist.splice(index, 1);
        setHeartState(heartOutline);
        //alert("Shoe removed from wishlist");
    } else {
        existingWishlist.push({
            title: props.name,
            thumbnail: props.thumbnail,
            price: props.price,
            brand: props.brand,
            stockXPrice: props.stockXPrice,
            stockXLink: props.stockXLink,
            flightClubPrice: props.flightClubPrice,
            flightClubLink: props.flightClubLink,
            goatPrice: props.goatPrice,
            goatLink: props.goatLink,
            description: props.description
        });
        setHeartState(heartFilled);
    }
    localStorage.setItem("Wishlist", JSON.stringify(existingWishlist));
};

    const handelAddComparList = () => {
        const index = existingCompareShoes.findIndex(item => item.title === props.name);
    if (index !== -1) {
        existingCompareShoes.splice(index, 1);
        setCompareState("notCompare");
        //alert("Shoe removed from wishlist");
    } else {
        existingCompareShoes.push({
            title: props.name,
            thumbnail: props.thumbnail,
            price: props.price,
            brand: props.brand,
            stockXPrice: props.stockXPrice,
            stockXLink: props.stockXLink,
            flightClubPrice: props.flightClubPrice,
            flightClubLink: props.flightClubLink,
            goatPrice: props.goatPrice,
            goatLink: props.goatLink,
            description: props.description
        });
        setCompareState("inCompare");
    }
    localStorage.setItem("Compare List", JSON.stringify(existingCompareShoes));
    }


    return(
        <div className="card" key={props.key}>
            
            <h2>{props.name}</h2>
            <img src={props.thumbnail} alt={props.name} width="170" height= "150"></img>
            <p><strong>Price: </strong>{props.price != null ? "$"+props.price : "Price Not Provided"}</p>
            <p><strong>Brand: </strong>{props.brand}</p>


            <button className='compare' id={compareState} onClick={handelAddComparList}>
                <img src={comparepic} className='image' alt="Add to Comparelist"></img>

            </button>
            <button className='wish' onClick={handleAddWishList}>
            <img src={heartState}  className='image' alt="Add to Comparelist" />


            </button>
            


        </div>

    );

}

export default Card;