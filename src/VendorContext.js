import React, { createContext, useState, useContext } from 'react';

const VendorContext = createContext();

export const VendorProvider = ({ children }) => {
  const [approvedVendors, setApprovedVendors] = useState([]);

  return (
    <VendorContext.Provider value={{ approvedVendors, setApprovedVendors }}>
      {children}
    </VendorContext.Provider>
  );
};

export const useVendors = () => useContext(VendorContext);
