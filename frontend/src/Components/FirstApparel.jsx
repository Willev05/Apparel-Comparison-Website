import React, { useEffect, useState,useContext } from 'react';
import '../Styles/FirstApparel.css';
import { ApparelContext } from '../Context/ApparelContext';



const FirstApparel = () => {
    const {selectedApparel} = useContext(ApparelContext);


    return (
        <>
            <div className='firstApparel-view'>
                <h2>Apparel 1</h2>
                {selectedApparel.length != 0 ?(
                <>
                    <img src={selectedApparel.thumbnail} alt={selectedApparel.name} width="130" height= "110"></img>
                    <p><strong>Retail Price: </strong>${selectedApparel.price}</p>
                    <p><strong>stockX: </strong>{selectedApparel.stockXPrice}</p>
                    <p><strong>flightClub: </strong>{selectedApparel.flightClubPrice}</p>
                    <p><strong>goat: </strong>{selectedApparel.goatPrice}</p>
                    <p><strong>Description: </strong>{selectedApparel.description}</p>
                    
                </>
            ):<p>Select an Apparel</p>
                }
            </div>
            
        </>
    );
};

export default FirstApparel;
