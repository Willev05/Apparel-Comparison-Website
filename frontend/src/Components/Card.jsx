import '../Styles/card.css';
import comparepic from '../assets/compare.209x256.png';
import heartOutline from '../assets/heartoutline2.png';
import heartFilled from '../assets/heartFilled.png';
import React, {useState} from 'react';

function Card(props){

var heartCondition;
var shoeInWishlist = false;
const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

for(let i = 0; i<existingWishlist.length; i++){
    if(existingWishlist[i].title === props.name){
        shoeInWishlist = true;
    }
}

shoeInWishlist ? heartCondition = heartFilled : heartCondition = heartOutline;

const[heartState, setHeartState] = useState(heartCondition);



const handleAddWishList = () => {
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

        
       

        for(let i = 0; i<existingWishlist.length; i++){
            if(JSON.stringify(existingWishlist[i]) === JSON.stringify(shoe)){
                existingWishlist.splice(i, 1);
                alert("shoe removed from wishlist");
                shoeInWishlist = true;
                
                setHeartState(heartOutline);
                
            }

        }

        if(!shoeInWishlist){
            existingWishlist.push(shoe);
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