import React, {
  createContext,
  ProviderProps,
  ReactElement,
  useState,
} from "react";

const initialValues = {
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
