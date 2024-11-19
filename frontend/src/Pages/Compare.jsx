import React from "react"; 
import LoadComparCards from "../Components/LoadCompareCards";
import CompareApparels from "../Components/CompareApparels";
import '../Styles/Compare.css';
import {ApparelProvider} from '../Context/ApparelContext';

const Compare = ()=>{

    return(
        <>
            <h1 id="title">Compare Dashboard</h1>
            <div className="compare-layout">
                <ApparelProvider>
                    <LoadComparCards />
                    <CompareApparels />
                </ApparelProvider>
                
            </div>
        
        </>
    );
};

export default Compare;