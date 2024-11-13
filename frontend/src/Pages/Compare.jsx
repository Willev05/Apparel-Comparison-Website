import React from "react"; 
import LoadComparCards from "../Components/LoadCompareCards";
import CompareApparels from "../Components/CompareApparels";
import '../Styles/Compare.css';

const Compare = ()=>{

    return(
        <>
            <h1 id="title">Compare Dashboard</h1>
            <div className="compare-layout">
                <LoadComparCards />
                <CompareApparels />
            </div>
        
        </>
    );
};

export default Compare;