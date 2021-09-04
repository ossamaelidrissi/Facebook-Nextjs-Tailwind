import Image from "next/image";
import {signIn} from 'next-auth/client'

function Login() {

    // document.title = "Ossama | Facebook | Login";

    return (
        <section className = "grid place-items-center">
            <Image src = "https://links.papareact.com/t4i" height = {400} width = {400} objectFit="contain" alt ="facebook logo"/> 
            <h1 className = " p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer" onClick = {signIn}>
                Login to facebook with ossama 
            </h1>
        </section>
    )
}

export default Login
