import React, { createContext, useState } from 'react';

// Creating the context
export const ApparelContext = createContext();

// Creating the provider component
export const ApparelProvider = ({ children }) => {

 
  const [loadChange, setLoadChange] = useState(0);
  const [selectedNum,setSelectedNum] = useState(0);
  const [selectedApparel,setSelectedApparel] = useState([]);
  const [selectedApparel2,setSelectedApparel2] = useState([]);



  return (
    <ApparelContext.Provider value={{loadChange, setLoadChange,selectedNum,setSelectedNum,selectedApparel,setSelectedApparel,setSelectedApparel2,selectedApparel2 }}>
      {children}
    </ApparelContext.Provider>
  );
};
