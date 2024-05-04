"use client";
import React, {useEffect, useState} from "react";


const LoginPage: React.FC = () => {
    const [apiResponse, setApiResponse] = useState("null");

    const fetchLogin = async () => {
        const response = await fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
            body: '',
        });

        console.log('Response:', response);
        console.log('Response body:', response.body);

        if (response.headers.get('Content-Type') === 'application/json') {
            const data = await response.json();
            console.log('Data:', data);
            const token = data["access_token"];
            setApiResponse(data);
        } else {
            console.log('Response is not JSON');
        }
    }

    useEffect(() => {
        console.log(document.cookie.split(";").map((c) => c.trim() + "\n").toString());
        fetchLogin().then(value => {
        });
    }, []);


    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black ">
        <div className={"h-80 w-1/2 bg-white"}>
            {apiResponse && <pre className={"text-black size-2"}>{JSON.stringify(apiResponse, null, 2)}</pre>}
        </div>
        <div className={"h-80 w-80 bg-white mt-10"}>
            <a className={"text-black"}>QR</a>
        </div>
    </div>
}

export default LoginPage;