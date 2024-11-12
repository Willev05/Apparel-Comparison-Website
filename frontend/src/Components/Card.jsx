import '../Styles/card.css';

function Card(props){
    return(
        <div className="card" key={props.key}>
            
            <h2>{props.name}</h2>
            <img src={props.thumbnail} alt={props.name} width="150" height= "150"></img>
            <p><strong>Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>

        </div>

    );

}

export default Card;