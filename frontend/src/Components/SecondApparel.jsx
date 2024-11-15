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

        const existingWishlist = JSON.parse(localStorage.getItem("Wishlist")) || [];
        existingWishlist.push(shoe);
        localStorage.setItem("Wishlist", JSON.stringify(existingWishlist));
    }


    return (
        <>
            <div className='secondApparel-view'>
                <h2>Apparel 2</h2>
                {selectedApparel2.length !== 0 ?(
                <>
                    <img src={selectedApparel2.thumbnail} alt={selectedApparel2.name} width="130" height= "110"></img>
                    <p><strong>Retail Price: </strong>${selectedApparel2.price}</p>
                    <p><strong>stockX: </strong>${selectedApparel2.stockXPrice}</p>
                    <p><strong>flightClub: </strong>${selectedApparel2.flightClubPrice}</p>
                    <p><strong>goat: </strong>${selectedApparel2.goatPrice}</p>
                    <p><strong>Description: </strong>{selectedApparel2.description}</p>

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
