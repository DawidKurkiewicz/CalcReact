import React, { createContext, useState, useContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  const addResult = (value) => {
    setResults([...results, value])
  }
  return (
    <MainContext.Provider value={{ results, addResult }}>
      {children}
    </MainContext.Provider>
  )
}

export const useMainContext = () => useContext(MainContext);
