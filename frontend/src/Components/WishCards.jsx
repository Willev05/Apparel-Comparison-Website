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
            <p><strong>StockX Price: </strong>{props.stockXPrice != null ? "$"+props.stockXPrice : "N/A"}</p>
            <p><strong>StockX Link: </strong><a href={props.stockXLink && props.stockXPrice !=null ? props.stockXLink: null}>{props.stockXLink && props.stockXPrice!= null ? "Purchase from StockX" : "Product Not Avalible for Purchase"}</a></p>

            <p><strong>FlightClub Price: </strong>{props.flightClubPrice != null ? "$"+props.flightClubPrice : "N/A"}</p>
            <p><strong>FlightClub Link: </strong><a href={props.flightClubLink}>{props.flightClubLink != null ? "Purchase from FlightClub" : "Product Not Avalible for Purchase"}</a></p>

            <p><strong>Goat Price: </strong>{props.goatPrice != null ? "$"+props.goatPrice : "N/A"}</p>
            <p><strong>Goat Link: </strong><a href={props.goatLink}>{props.goatLink != null ? "Purchase from Goat" : "Product Not Avalible for Purchase"}</a></p>
        </div>
    );
}

export default WishCards;
