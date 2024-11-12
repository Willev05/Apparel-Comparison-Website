import '../Styles/card.css';

function Card(props){

    const handelAddComparList = ()=>{

        const shoe ={
            thumbnail: props.thumbnail,
            title: props.name,
            price: props.price,
            brand: props.brand

        }

        const existingShoes = JSON.parse(localStorage.getItem("Compare List")) || [];

        existingShoes.push(shoe);
        localStorage.setItem("Compare List", JSON.stringify(existingShoes));


    }


    return(
        <div className="card" key={props.key}>
            
            <h2>{props.name}</h2>
            <img src={props.thumbnail} alt={props.name} width="150" height= "150"></img>
            <p><strong>Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>

            <button className='compare' onClick={handelAddComparList}>Add to Compare List</button>
            <button className='wish'>Add to Wishlist</button>

        </div>

    );

}

export default Card;