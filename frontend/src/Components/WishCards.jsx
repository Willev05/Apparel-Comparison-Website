import React from 'react';
import '../Styles/WishCards.css';

function WishCards(props) {
    return (
        <div className="card2">
            <h2>{props.title}</h2>
            <img src={props.thumbnail} alt={props.title} width="170" height="150" />
            <p><strong>Retail Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>

            <p><strong>------------------------------Resellers---------------------------</strong></p>
            <p><strong>StockX Price: </strong>${props.stockXPrice}</p>
            <p><strong>StockX Link: </strong><a href={props.stockXLink}>Purchase from StockX</a></p>

            <p><strong>FlightClub Price: </strong>${props.flightClubPrice}</p>
            <p><strong>FlightClub Link: </strong><a href={props.flightClubLink}>Purchase from FlightClub</a></p>

            <p><strong>Goat Price: </strong>${props.goatPrice}</p>
            <p><strong>Goat Link: </strong><a href={props.goatLink}>Purchase from Goat</a></p>
        </div>
    );
}

export default WishCards;
