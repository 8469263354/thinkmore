// SignInButton.jsx
import React from 'react';
import { auth, provider, signInWithPopup } from './Firebase.js';

const SignInButton = () => {
    const handleSignIn = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            // The signed-in user info.
            const user = result.user;
            console.log('User Info:', user);
            // You can use user info as needed, for example, set the user in state, redirect, etc.
        } catch (error) {
            console.error('Error during sign-in:', error);
            // Handle Errors here.
        }
    };

    return (
        <button onClick={handleSignIn}>
            Sign in with Google
        </button>
    );
};

export default SignInButton;
