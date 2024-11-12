import '../Styles/card.css';

function Card(props){







    const handleAddWishList = ()=>{

        const shoe ={
            thumbnail: props.thumbnail,
            title: props.name,
            price: props.price,
            brand: props.brand

        }

        const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];

        existingWishlist.push(shoe);
        localStorage.setItem("Wishlist", JSON.stringify(existingWishlist));


    }


    return(
        <div className="card" key={props.key}>
            
            <h2>{props.name}</h2>
            <img src={props.thumbnail} alt={props.name} width="150" height= "150"></img>
            <p><strong>Price: </strong>${props.price}</p>
            <p><strong>Brand: </strong>{props.brand}</p>

            <button className='compare'>Add to Compare List</button>
            <button className='wish' onClick={handleAddWishList}>Add to Wishlist</button>

        </div>

    );

}

export default Card;