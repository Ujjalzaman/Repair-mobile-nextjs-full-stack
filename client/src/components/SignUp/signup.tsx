"use client";
import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/homepage/signup.png";
import Image from "next/image";
import FormInput from "@/components/Forms/FormInput";
import { useUserSignUpMutation } from "@/redux/api/authApi";
import { useRouter } from "next/navigation";
import Form from "../Forms/Form";
import Link from "next/link";
import { useState } from "react";

const SignUP = () => {
    const router = useRouter();
    const [userSignUp] = useUserSignUpMutation();
    const [isMatch, setIsMatch] = useState<boolean>(false);
    const onSubmit = async (data: any) => {
        if (data.password !== data.repassword) {
            setIsMatch(true);
        }
        if (!isMatch) {
            const { repassword, ...signUpData } = data;
            const obj = JSON.stringify(signUpData);
            const formData = new FormData();
            formData.append('data', obj)
            try {
                message.loading("Signing up ....")
                const res = await userSignUp(formData).unwrap();
                if (!!res) {
                    message.success("Successfully Signup");
                    router.push('/login')
                }
            } catch (err) { }
        }
    };
    return (
        <Row
            justify="center"
            align="middle"
            style={{
                minHeight: "100vh",
            }}
        >
            <Col sm={12} md={16} lg={10}>
                <Image src={loginImage} width={500} alt="login image" />
            </Col>
            <Col sm={12} md={8} lg={8}>
                <h1 style={{ margin: "15px 0px", }}>
                    Sign UP Your Account !!
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="name" type="text" size="large" label="Name" />
                        </div>
                        <div style={{ margin: "15px 0px" }}>
                            <FormInput name="email" type="email" size="large" label="Email" />
                        </div>
                        <div style={{ margin: "15px 0px" }}>
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password"
                            />
                        </div>
                        <div style={{ margin: "15px 0px" }}>
                            <FormInput
                                name="repassword"
                                type="password"
                                size="large"
                                label="Re-Password"
                            />
                        </div>
                        {isMatch && <p className="form-text text-danger">Password is not Matched</p>}
                        <Button type="primary" htmlType="submit">
                            SignUp
                        </Button>
                        <p className="my-2">Alreay Have Account ? <Link href={'/login'}>Login</Link></p>
                    </Form>
                </div>
            </Col>
        </Row>
    );
};

export default SignUP;