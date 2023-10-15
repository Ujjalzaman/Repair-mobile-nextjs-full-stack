import SignUP from "@/components/SignUp/signup";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'University Management/SignUp',
    description: 'Generated by create next app',
}
const SignUpPage = () => {
    return (
        <>
          <SignUP/>
        </>
    )
}

export default SignUpPage;