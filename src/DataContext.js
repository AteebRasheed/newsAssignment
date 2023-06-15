// DataContext.js
import React, { createContext, useState } from 'react';

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <DataContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
