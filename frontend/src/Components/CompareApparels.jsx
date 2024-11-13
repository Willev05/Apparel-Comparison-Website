import React, { useEffect, useState } from 'react';
import '../Styles/CompareApparels.css';
import FirstApparel from './FirstApparel';
import SecondApparel from './SecondApparel';



const CompareApparels = () => {
    


    return (
        <>
            <div className='compare-view'>
                <FirstApparel />
                <SecondApparel />

            </div>
            
        </>
    );
};

export default CompareApparels;
