import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './Login.css';
export default function Login() {
    const { login, logout, user, isLogged, loading, error } = useAuth();
    const [form, setForm] = useState({ username: '', password: '' });

    const handleLogin = () => {
        if (form.username && form.password) {
            login(form.username, form.password);
        }
    };

    return (
        <div className="login-container">
            {/* Background Shapes */}
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>

            <div className="login-card">
                {isLogged ? (
                    <div className="welcome-container">
                        <div className="avatar">
                            {user.image ? (
                                <img src={user.image} alt={user.name} style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
                            ) : (
                                user.name ? user.name.charAt(0).toUpperCase() : 'U'
                            )}
                        </div>
                        <div className="login-header">
                            <h2 className="login-title">Welcome Back</h2>
                            <p className="login-subtitle">{user.name}</p>
                        </div>
                        <button className="login-button logout-button" onClick={logout}>
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="login-header">
                            <h1 className="login-title">Auth Guest</h1>
                            <p className="login-subtitle">Enter your details to access your journey.</p>
                        </div>
                        <div className="login-form">
                            {error && <div style={{ color: '#f87171', marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
                            <div className="input-group">
                                <input
                                    className="login-input"
                                    type="text"
                                    placeholder="Username"
                                    value={form.username}
                                    onChange={(e) => setForm({ ...form, username: e.target.value })}
                                />
                            </div>
                            <div className="input-group">
                                <input
                                    className="login-input"
                                    type="password"
                                    placeholder="Password"
                                    value={form.password}
                                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                                    onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                                />
                            </div>
                            <div className="divider"></div>
                            <button className="login-button" onClick={handleLogin} disabled={loading}>
                                {loading ? 'Signing In...' : 'Sign In'}
                            </button>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
}
