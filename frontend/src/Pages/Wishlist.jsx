import React from "react"; 
import LoadWishCards from "../Components/LoadWishCards";
import {ApparelProvider} from '../Context/ApparelContext';

const Wishlist = ()=>{

    return(
        <>
            <h1>Wishlist Page</h1>
            <ApparelProvider>
                <LoadWishCards />

            </ApparelProvider>
           
        
        
        
        
        </>
    );
};

export default Wishlist;