import React from 'react';
import '../Styles/WishCards.css';

function WishCards(props) {
    return (
        <div className="card2">
            <h2>{props.title}</h2>
            <img src={props.thumbnail} alt={props.title} width="170" height="150" />
            <p><strong>Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>

            <p><strong>------------------------------Resellers---------------------------</strong></p>
            <p><strong>stockX price: </strong>${props.stockXPrice}</p>
            <p><strong>stockX Link: </strong><a href={props.stockXLink}>{props.stockXLink}</a></p>

            <p><strong>flightClub price: </strong>${props.flightClubPrice}</p>
            <p><strong>flightClub Link: </strong><a href={props.flightClubLink}>{props.flightClubLink}</a></p>

            <p><strong>goat price: </strong>${props.goatPrice}</p>
            <p><strong>goat Link: </strong><a href={props.goatLink}>{props.goatLink}</a></p>
        </div>
    );
}

export default WishCards;
