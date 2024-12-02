const reducer = (state, action) => {
    if (action.type === "CLEAR_CART") {
        return{...state, cart: [] };
    };
    if (action.type === "CLEAR_CART") {
        return {
        ...state, 
        cart: state.cart.filter((item) => item.id != action.payload), 
        };
    }
    if (action.type === "INCREASE") {
        let tempCart = state.cart.map((item) => {
            if(item.id === action.payload){
                return{item, amount: item.amount + 1};
            }
            return item;
        });
        return {
        ...state, 
        cart: tempCart, 
        };
    }
    if (action.type === "GET_TOTALS") {
        const total = state.cart.reduce(
            (cartTotal, cartItem) => cartTotal + cartItem.amount * cartItem.price, state.total
        );
        return {...state, total};
    }
    return state;
};

export default reducer;