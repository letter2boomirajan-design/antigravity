import { createContext, useEffect, useState, useContext, useMemo } from "react";

const ProductContext = createContext();
export const useProducts = () => useContext(ProductContext);

export function ProductProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            setProducts(data);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    const value = useMemo(() => ({
        products,
        loading
    }), [products, loading]);

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    );
}
