"use client";
import React, {useState} from "react";


const LoginPage: React.FC = () => {


    const [apiResponse, setApiResponse] = useState(null);

    const fetchApi = async () => {
        const response = await fetch('http://127.0.0.1:8000/login?username=user_1_4&password=ALfSzDfky9udTjiBQDil%40', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
            },
        });
        const data = await response.json();
        console.log(data)
        setApiResponse(data);
    }


    return <div className="flex h-screen w-screen flex-col items-center justify-center bg-black ">
        <div className={"h-80 w-80 bg-white"}>
            {apiResponse && <pre>{JSON.stringify(apiResponse, null, 2)}</pre>}
        </div>
        <div className={"flex-col flex  h-10 w-80 bg-blue-950 mt-10 items-center justify-center"}>
            <a className={""} onClick={fetchApi}> Token</a>
        </div>
    </div>
}

export default LoginPage;