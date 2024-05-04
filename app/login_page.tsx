"use client";
import React, {useEffect, useState} from "react";


const LoginPage: React.FC = () => {


    const [apiResponse, setApiResponse] = useState("null");

    // const fetchToken = async () => {
    //     const params = new URLSearchParams();
    //     params.append('grant_type', 'password');
    //     params.append('username', 'user_1_4');
    //     params.append('password', 'ALfSzDfky9udTjiBQDil@');
    //     params.append('client_id', 'mobile');
    //     params.append('client_secret', 'bd5f092087754fed8acc376752b4ce16');
    //     params.append('scope', 'openid');
    //
    //     try {
    //         const response = await fetch('http://localhost:3000/ids/connect/token', {
    //             method: 'POST',
    //             headers: {
    //                 'Accept': 'application/json',
    //                 'Content-Type': 'application/x-www-form-urlencoded'
    //             },
    //             body: params
    //         });
    //         const data = await response.json();
    //         const token = data["access_token"];
    //         setApiResponse(data);
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

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