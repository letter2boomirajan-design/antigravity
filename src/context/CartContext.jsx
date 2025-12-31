import { createContext, useContext, useReducer, useMemo, useCallback } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const exist = state.find((item) => item.id === action.payload.id);
            if (exist)
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            return [...state, { ...action.payload, qty: 1 }];

        case "REMOVE":
            return state.filter((item) => item.id !== action.payload);

        case "INCREASE":
            return state.map((item) =>
                item.id === action.payload ? { ...item, qty: item.qty + 1 } : item
            );

        case "DECREASE":
            return state
                .map((item) =>
                    item.id === action.payload && item.qty > 1
                        ? { ...item, qty: item.qty - 1 }
                        : item
                )
                .filter((item) => item.qty !== 0);

        default:
            return state;
    }
};

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(reducer, []);

    const addToCart = useCallback((product) => dispatch({ type: "ADD", payload: product }), []);
    const removeFromCart = useCallback((id) => dispatch({ type: "REMOVE", payload: id }), []);
    const increase = useCallback((id) => dispatch({ type: "INCREASE", payload: id }), []);
    const decrease = useCallback((id) => dispatch({ type: "DECREASE", payload: id }), []);

    const total = useMemo(() => cart.reduce((a, b) => a + b.price * b.qty, 0), [cart]);

    const value = useMemo(() => ({
        cart,
        addToCart,
        removeFromCart,
        increase,
        decrease,
        total
    }), [cart, addToCart, removeFromCart, increase, decrease, total]);

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}
