import '../Styles/card.css';
import comparepic from '../assets/compare.209x256.png';
import heartOutline from '../assets/heartoutline2.png';
import heartFilled from '../assets/heartFilled.png';
import React, {useEffect, useState} from 'react';

function Card(props){

var heartCondition;
var shoeInWishlist = false;
const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

// Initialize heartState directly in useState, then set it in useEffect
const [heartState, setHeartState] = useState(heartOutline);

useEffect(() => {
    let isFavorited = existingWishlist.some(apparel => apparel.title === props.name);
    setHeartState(isFavorited ? heartFilled : heartOutline);
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
        const shoe = {
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
        };

        const existingShoes = JSON.parse(localStorage.getItem("Compare List")) || [];

        let shoeInCompare = false;

        for(let i = 0; i<existingShoes.length; i++){
            if(JSON.stringify(existingShoes[i]) === JSON.stringify(shoe)){
                shoeInCompare = true;
            }
        }

        if(shoeInCompare){
            alert("Shoe already in compare list");
        }

        else {
            existingShoes.push(shoe);
        }




       
       
        
        localStorage.setItem("Compare List", JSON.stringify(existingShoes));
    }


    return(
        <div className="card" key={props.key}>
            
            <h2>{props.name}</h2>
            <img src={props.thumbnail} alt={props.name} width="170" height= "150"></img>
            <p><strong>Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>


            <button className='compare' onClick={handelAddComparList}>
                <img src={comparepic} className='image' alt="Add to Comparelist" />

            </button>
            <button className='wish' onClick={handleAddWishList}>
            <img src={heartState} className='image' alt="Add to Comparelist" />


            </button>
            


        </div>

    );

}

export default Card;