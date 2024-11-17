import React from "react"; 
import LoadWishCards from "../Components/LoadWishCards";
import {ApparelProvider} from '../Context/ApparelContext';
import '../Styles/Wishlist.css';

const Wishlist = ()=>{

    return(
        <>
            <h1 id="wish-title">Wishlist Page</h1>
            <ApparelProvider>
                <LoadWishCards />

            </ApparelProvider>
           
        
        
        
        
        </>
    );
};

export default Wishlist;