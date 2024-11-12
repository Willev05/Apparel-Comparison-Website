// WishCards.js
import React from 'react';
import '../Styles/WishCards.css';

function WishCards(props) {
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <img src={props.thumbnail} alt={props.title} width="170" height="150" />
            <p><strong>Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>

            <p><strong>---Resellers---</strong></p>
            <p><strong>StockX price: </strong>${props.stockXPrice}</p>
            <p><strong>StockX Link: </strong><a href={props.stockXLink}>{props.stockXLink}</a></p>

            <p><strong>FlightClub price: </strong>${props.flightClubPrice}</p>
            <p><strong>FlightClub Link: </strong><a href={props.flightClubLink}>{props.flightClubLink}</a></p>

            <p><strong>GOAT price: </strong>${props.goatPrice}</p>
            <p><strong>GOAT Link: </strong><a href={props.goatLink}>{props.goatLink}</a></p>
        </div>
    );
}

export default WishCards;
