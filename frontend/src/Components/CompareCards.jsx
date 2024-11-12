import React from 'react';
import '../Styles/CompareCards.css';

const CompareCards = ({ title, thumbnail, price, brand }) => {
  return (
    <>
        <div className='CompareCard'>
        <h3 className="title">{title}</h3>
        <div className="content">
            <img src={thumbnail} alt={title} className="thumbnail" />
            <div className="info">
            <p><strong>Price: </strong>${price}</p>
            <p><strong>Brand: </strong>{brand}</p>
            </div>
        </div>
        </div>
    </>
  );
};

export default CompareCards;
