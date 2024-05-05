"use client";
import React, {useEffect} from 'react';

import AuthService from './auth_service';

const authService = new AuthService();

export default function AuthPage() {
    useEffect(() => {
        async function getUser() {
            const user = await authService.getUser();
            if (!user) {
                await authService.login();
            } else {
                console.log('User details:', user);
            }
        }

        getUser();
    }, []);

    return <div>Welcome!</div>;
}