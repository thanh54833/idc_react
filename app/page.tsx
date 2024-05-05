import AuthPage from "@/app/auth_page";
import React from "react";

export default function Home() {

    return (
        <main className="flex h-screen w-screen flex-col items-center justify-center bg-black ">
            {/*<LoginPage/>*/}
            {/*<LoginIDSPage/>*/}
            <AuthPage/>
        </main>
    );
}
