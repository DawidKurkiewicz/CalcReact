import React, { createContext, useState, useContext } from 'react';

const MainContext = createContext();

export const MainProvider = ({ children }) => {
  const [results, setResults] = useState([]);

  const addResult = (value) => {
    setResults([...results, value])
  }
  const removeResult = (value )=>{
    for( let i = 0; i < results.length; i++){
        if ( results[i] === value) {
          results.splice(i, 1);
        }
    }
    setResults([...results])
  }
  return (
    <MainContext.Provider value={{ results, addResult, removeResult }}>
      {children}
    </MainContext.Provider>
  )
}

export const useMainContext = () => useContext(MainContext);
