"use client";

import { Button, Col, Row, message } from "antd";
import loginImage from "@/assets/login-image.svg";
import Image from "next/image";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { setUserInfo } from "@/service/auth.service";
import { useRouter } from "next/navigation";
import Form from "../Forms/Form";
import Link from "next/link";

type FormValues = {
    id: string;
    password: string;
};

const LoginPage = () => {
    const router = useRouter();
    const [userLogin] = useUserLoginMutation()
    const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
        try {
            const res = await userLogin(data).unwrap();
            if (res && res.accessToken) {
                setUserInfo({ accessToken: res.accessToken })
                message.success("Successfully Login");
                router.push('/dashboard')
            }
        } catch (err: any) {
            message.error(err.message)
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
                <h1
                    style={{
                        margin: "15px 0px",
                    }}
                >
                    First login your account
                </h1>
                <div>
                    <Form submitHandler={onSubmit}>
                        <div>
                            <FormInput name="email" type="email" size="large" label="Email" />
                        </div>
                        <div
                            style={{
                                margin: "15px 0px"
                            }}
                        >
                            <FormInput
                                name="password"
                                type="password"
                                size="large"
                                label="Password"
                            />
                        </div>
                        <Button type="primary" htmlType="submit">
                            Login
                        </Button>
                    </Form>
                </div>
                <p className="my-2">Alreay Have Account ? <Link href={'/signup'}>Signup</Link></p>
            </Col>
        </Row>
    );
};

export default LoginPage;