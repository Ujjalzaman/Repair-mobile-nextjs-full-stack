import LoginPage from "@/components/Login/Login";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'FixMyPhone/Login',
    description: 'Welcome to FixMyPhone',
  }
const Login = () => {
    return (
        <>
            <LoginPage />
        </>
    )
}

export default Login;