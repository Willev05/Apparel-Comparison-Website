import React, { createContext, useState } from 'react';

// Creating the context
export const ApparelContext = createContext();

// Creating the provider component
export const ApparelProvider = ({ children }) => {

 
  const [loadChange, setLoadChange] = useState(0);



  return (
    <ApparelContext.Provider value={{loadChange, setLoadChange }}>
      {children}
    </ApparelContext.Provider>
  );
};
