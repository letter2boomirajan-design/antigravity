import { useProducts } from "../context/ProductContext";
import { useCart } from "../context/CartContext";

export default function ProductList() {
    const { products, loading } = useProducts();
    const { addToCart } = useCart();

    if (loading) return <h2 style={{ color: 'white', textAlign: 'center' }}>Loading products...</h2>;

    return (
        <div className="product-grid">
            {products.map((p) => (
                <div key={p.id} className="product-card">
                    <div className="product-image-container">
                        <img src={p.image} alt={p.title} className="product-image" />
                    </div>
                    <div className="product-info">
                        <h3 className="product-title" title={p.title}>{p.title}</h3>
                        <p className="product-price">${p.price.toFixed(2)}</p>
                        <button className="add-btn" onClick={() => addToCart(p)}>
                            Add to Cart
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}
