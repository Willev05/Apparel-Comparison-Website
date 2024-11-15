import React, { useContext } from 'react';
import '../Styles/WishCards.css';
import { ApparelContext } from '../Context/ApparelContext';

function WishCards(props) {

    const {loadChange, setLoadChange} = useContext(ApparelContext);

    const handleRemove = ()=>{
        if(window.confirm("Are you sure you want to remove this apparel?")){

            const Key = `Wishlist`;

            const storedApparels = JSON.parse(localStorage.getItem(Key)) || [];

            const indexToRemove = storedApparels.findIndex((apparel) => {
                const firstValue = Object.values(apparel)[0];
                return firstValue === props.title;
              });
            

              if (indexToRemove !== -1) {
                storedApparels.splice(indexToRemove, 1); 
              }
            
              //saving the list back into localstorage 
              localStorage.setItem(Key, JSON.stringify(storedApparels));
    

              setLoadChange(loadChange+1);

        }

    }



    return (
        <div className="card2">
            <h2>{props.title}</h2>
            <img src={props.thumbnail} alt={props.title} width="170" height="150" />
            <p><strong>Retail Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>

            <p><strong>------------------------------Resellers---------------------------</strong></p>
            <p><strong>StockX Price: </strong>{props.stockXPrice != null ? "$"+props.stockXPrice : "N/A"}</p>
            <p><strong>StockX Link: </strong><a href={props.stockXLink && props.stockXPrice !=null ? props.stockXLink: null}>{props.stockXLink && props.stockXPrice!= null ? "Purchase from StockX" : "Product Not Avalible for Purchase"}</a></p>

            <p><strong>FlightClub Price: </strong>{props.flightClubPrice != null ? "$"+props.flightClubPrice : "N/A"}</p>
            <p><strong>FlightClub Link: </strong><a href={props.flightClubLink}>{props.flightClubLink != null ? "Purchase from FlightClub" : "Product Not Avalible for Purchase"}</a></p>

            <p><strong>Goat Price: </strong>{props.goatPrice != null ? "$"+props.goatPrice : "N/A"}</p>
            <p><strong>Goat Link: </strong><a href={props.goatLink}>{props.goatLink != null ? "Purchase from Goat" : "Product Not Avalible for Purchase"}</a></p>

            <button id="remove-wish" onClick={handleRemove}>Remove from Wishlist</button>

        </div>
    );
}

export default WishCards;
