'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useGetBlogQuery, useUpdateBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const EditAppointment = ({ params }: { params: any }) => {
    const { id } = params;
    console.log(id)
    const router = useRouter();
    const [updateBlog] = useUpdateBlogMutation();
    const { data } = useGetBlogQuery(id);
    console.log(data)
    const handleOnSubmit = async (values: any) => {
        message.loading("Updating ...")
        try {
            const res = await updateBlog({ id, body: values });
            if (res) {
                message.success("Successfully Blog Updated !");
                router.push('/admin/blog')
            }
        } catch (error: any) {
            message.loading(error.message)
        }
    }

    const defaultValues = {
        title: data?.title || '',
        description: data?.description || '',
    }
    const base = 'admin'
    return (
        <>
            <FBreadCrumb
                items={[
                    { label: `${base}`, link: `/${base}` },
                    { label: "blog", link: `/${base}/blog` },
                ]}
            />
            <h1>Update Appintment</h1>
            <Form submitHandler={handleOnSubmit} defaultValues={defaultValues}>
                <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                    }}
                >
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="title"
                                type="text"
                                size="large"
                                label="Name"
                            />
                        </Col>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="description"
                                type="text"
                                size="large"
                                label="Name"
                            />
                        </Col>

                    </Row>
                </div>
                <Button htmlType="submit" type="primary">Update</Button>
            </Form>
        </>
    )
}

export default EditAppointment;