import React, { useState, useContext, useReducer, useEffect } from 'react';
import cartItems from './data';
import reducer from './reducer';

const url = 'https://course-api.com/react-useReducer-cart-project';
const AppContext = React.createContext();
const intialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const clearCart = () => {
    dispatch({type: "CLEAR_CART"});
  };
  const remove = (id) => {
    dispatch({type: "REMOVE", payload: id});
  };
  const increase = (id) => {
    dispatch({type: "INCREASE", payload: id});
  };
  useEffect(() => {
    dispatch({type:"GET_TOTALS"})
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        remove,
        increase,
      }}>
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
};

export { AppContext, AppProvider };
