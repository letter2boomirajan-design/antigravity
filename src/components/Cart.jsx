import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function Cart() {
    const { cart, removeFromCart, increase, decrease, total } = useCart();
    const [isOpen, setIsOpen] = useState(false);

    const totalItems = cart.reduce((ack, item) => ack + item.qty, 0);

    return (
        <div className={`cart-panel ${isOpen ? 'open' : 'closed'}`}>
            <div className="cart-header" onClick={() => setIsOpen(!isOpen)}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="9" cy="21" r="1"></circle>
                        <circle cx="20" cy="21" r="1"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <span>Your Cart ({totalItems})</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontWeight: 700, color: '#a5b4fc' }}>${total.toFixed(2)}</span>
                    <button className="toggle-btn">
                        {isOpen ? 'Close' : 'View'}
                    </button>
                </div>
            </div>

            <div className="cart-content-wrapper">
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <div className="empty-cart">
                            <p>Your cart is empty.</p>
                            <p>Start adding products!</p>
                        </div>
                    ) : (
                        cart.map((item) => (
                            <div key={item.id} className="cart-item">
                                <img src={item.image} alt={item.title} className="cart-item-img" />
                                <div className="cart-item-details">
                                    <h4 className="cart-item-title" title={item.title}>{item.title}</h4>
                                    <div className="cart-item-price">${(item.price * item.qty).toFixed(2)}</div>
                                </div>
                                <div className="cart-controls">
                                    <button className="qty-btn" onClick={() => decrease(item.id)}>-</button>
                                    <span style={{ fontSize: '0.9rem', minWidth: '20px', textAlign: 'center' }}>{item.qty}</span>
                                    <button className="qty-btn" onClick={() => increase(item.id)}>+</button>
                                </div>
                                <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                    ×
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {cart.length > 0 && (
                    <div className="cart-footer">
                        <div className="total-row">
                            <span>Total</span>
                            <span>${total.toFixed(2)}</span>
                        </div>
                        <button className="checkout-btn">Checkout</button>
                    </div>
                )}
            </div>
        </div>
    );
}
