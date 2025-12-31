import React, { createContext, useState, useContext, useCallback, useMemo } from 'react';
import axios from 'axios';

const AuthContext = createContext(null);

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const login = useCallback(async (username, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(
                'https://dummyjson.com/auth/login',
                { username, password },
                { headers: { 'Content-Type': 'application/json' } }
            );

            if (response.data) {
                // Map the relevant user data from the response
                const userData = {
                    id: response.data.id,
                    username: response.data.username,
                    // Use firstName and lastName if available, otherwise fallback to username
                    name: response.data.firstName ? `${response.data.firstName} ${response.data.lastName}` : response.data.username,
                    email: response.data.email,
                    image: response.data.image,
                    token: response.data.token
                };
                setUser(userData);
            }
        } catch (err) {
            setUser(null);
            setError(err.response?.data?.message || 'Login failed. Please check your credentials.');
            console.error('Login failed:', err);
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        setError(null);
    }, []);

    const value = useMemo(() => ({
        user,
        loading,
        error,
        isLogged: !!user,
        login,
        logout
    }), [user, loading, error, login, logout]);

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}
