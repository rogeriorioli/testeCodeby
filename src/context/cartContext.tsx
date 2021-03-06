import React, { createContext, useState } from "react";

export const initialValues = {
  item: [],
  setCart: (item: {}) => {},
};

export const cardContext = createContext(initialValues);

export const CartProvider = ({ children }) => {
  const [item, setCart] = useState(initialValues.item);

  return (
    <cardContext.Provider value={{ item, setCart }}>
      {children}
    </cardContext.Provider>
  );
};
