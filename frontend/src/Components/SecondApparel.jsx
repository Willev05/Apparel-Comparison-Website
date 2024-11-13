import React, { useEffect, useState,useContext } from 'react';
import '../Styles/SecondApparels.css';
import { ApparelContext } from '../Context/ApparelContext';



const SecondApparel = () => {
    
    const {selectedApparel2} = useContext(ApparelContext);


    return (
        <>
            <div className='secondApparel-view'>
                <h2>Apparel 2</h2>
                {selectedApparel2.length != 0 ?(
                <>
                    <img src={selectedApparel2.thumbnail} alt={selectedApparel2.name} width="130" height= "110"></img>
                    <p><strong>Retail Price: </strong>${selectedApparel2.price}</p>
                    <p><strong>stockX: </strong>{selectedApparel2.stockXPrice}</p>
                    <p><strong>flightClub: </strong>{selectedApparel2.flightClubPrice}</p>
                    <p><strong>goat: </strong>{selectedApparel2.goatPrice}</p>
                    <p><strong>Description: </strong>{selectedApparel2.description}</p>
                </>
            ):<p>Select an Apparel</p>
                }

            </div>
            
        </>
    );
};

export default SecondApparel;
