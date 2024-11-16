import React, {useContext } from 'react';
import '../Styles/SecondApparels.css';
import { ApparelContext } from '../Context/ApparelContext';



const SecondApparel = () => {
    
    const {selectedApparel2,setSelectedApparel2} = useContext(ApparelContext);

    const handleClear = ()=>{
        setSelectedApparel2([]);

    const existingCompareCards = JSON.parse(sessionStorage.getItem("Cards")) || [];
      console.log(existingCompareCards);

      const index = existingCompareCards.findIndex(item => item.title === selectedApparel2.title);
      console.log(index);

      if (index !== -1) {
        existingCompareCards.splice(index, 1);
      }

      sessionStorage.setItem("Cards", JSON.stringify(existingCompareCards));
    }

    const handleAddWishlist = ()=>{
        const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
        const index = existingWishlist.findIndex(item => item.title === selectedApparel2.title);

        if (index !== -1) {
            alert("Item already on Wishlist");
        }

        else{

            const shoe = {
                title: selectedApparel2.title,
                thumbnail: selectedApparel2.thumbnail,
                price: selectedApparel2.price,
                brand: selectedApparel2.brand,
                stockXPrice: selectedApparel2.stockXPrice,
                stockXLink: selectedApparel2.stockXLink,
                flightClubPrice: selectedApparel2.flightClubPrice,
                flightClubLink: selectedApparel2.flightClubLink,
                goatPrice: selectedApparel2.goatPrice,
                goatLink: selectedApparel2.goatLink,
                description: selectedApparel2.description
            };
    
    
            existingWishlist.push(shoe);
            localStorage.setItem("Wishlist", JSON.stringify(existingWishlist));


        }

       
    }


    return (
        <>
            <div className='secondApparel-view'>
                <h2>Apparel 2</h2>
                {selectedApparel2.length !== 0 ?(
                <>
                    <img src={selectedApparel2.thumbnail} alt={selectedApparel2.name} width="130" height= "110"></img>
                    <p><strong>Retail Price: </strong>{selectedApparel2.price != null ? "$"+selectedApparel2.price : "Price Not Provided"}</p>
                    <p><strong>StockX: </strong>{selectedApparel2.stockXPrice != null ? "$"+selectedApparel2.stockXPrice : "N/A"}</p>
                    <p><strong>FlightClub: </strong>{selectedApparel2.flightClubPrice != null ? "$"+selectedApparel2.flightClubPrice : "N/A"}</p>
                    <p><strong>Goat: </strong>{selectedApparel2.goatPrice != null ? "$"+selectedApparel2.goatPrice : "N/A"}</p>
                    <div className='des2'>
                        <p><strong>Description: </strong>{selectedApparel2.description ? selectedApparel2.description : "Description Not Provided"}</p>

                    </div>
                   


                    <div className='action2'>
                        <button id="clear" onClick={handleClear}>Clear Selection</button>
                        <button id="wish" onClick={handleAddWishlist}>Add to Wishlist</button>
                    </div>
                </>
            ):<p>Select an Apparel</p>
                }

            </div>
            
        </>
    );
};

export default SecondApparel;
