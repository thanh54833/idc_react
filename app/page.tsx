import LoginPage from "@/app/login_page";
import LoginIDSPage from "@/app/login_ids";

export default function Home() {

    return (
        <main className="flex h-screen w-screen flex-col items-center justify-center bg-black ">
            {/*<LoginPage/>*/}
            <LoginIDSPage/>
        </main>
    );
}
