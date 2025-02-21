import React, { createContext, useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [login, setLogin] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setLogin(user.displayName || user.email);
                setCurrentUser(user);
            } else {
                setLogin(null);
                setCurrentUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{ login, setLogin, currentUser, setCurrentUser }}>
            {children}
        </AuthContext.Provider>
    );
};
