"use client";
import React from "react";

const LoginIDSPage: React.FC = () => {
    const initiateLogin = () => {
        // Construct the authority URL
        const authorityUrl = 'https://ids.concung.com/identity';

        // Define your client ID and the redirect URI
        const clientId = 'your-client-id';
        const redirectUri = encodeURIComponent(window.location.origin + '/callback');

        // Define the response type and the scope
        const responseType = 'code';
        const scope = encodeURIComponent('openid profile api1');

        // Construct the login URL
        const loginUrl = `${authorityUrl}/connect/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}&scope=${scope}`;

        // Redirect the user to the login URL
        window.location.href = loginUrl;
    };

    return (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-black ">
            <div className={"h-60 w-1/2 bg-white"}>
                <button onClick={initiateLogin}>Login with Identity Server</button>
            </div>
            <div className={"h-80 w-80 bg-white mt-10"}>
                <a className={"text-black"}>QR</a>
            </div>
        </div>
    );
}

export default LoginIDSPage;