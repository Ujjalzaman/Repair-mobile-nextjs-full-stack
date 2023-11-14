'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/Forms/uploadImage";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useAddBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";

const CreateAdminPage = () => {
    const base = 'admin';
    const router = useRouter();
    const [addBlog] = useAddBlogMutation();

    const handleOnSubmit = async (values: any) => {
        message.loading("Creating ...")
        const obj = {...values};
        const file = obj['file'];
        delete obj['file'];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append('file', file as Blob);
        formData.append('data', data);
        try {
            const res = await addBlog(formData);
            if (!!res) {
                message.success("Successfully Blog Created !");
                router.push('/admin/blog')
            }
        } catch (error:any) {
            message.loading(error.message)
        }
    }
    return (
        <>
            <FBreadCrumb items={[
                { label: `${base}`, link: `/${base}` },
                { label: `blog`, link: `/${base}/blog` }

            ]} />
            <h5 className='my-2'>Create Blog</h5>
            <Form submitHandler={handleOnSubmit}>
                <div
                    style={{
                        border: "1px solid #d9d9d9",
                        borderRadius: "5px",
                        padding: "15px",
                        marginBottom: "10px",
                    }}
                >
                    <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
                        <Col span={24} style={{ margin: "10px 0" }}>
                            <FormInput
                                name="title"
                                type="text"
                                size="large"
                                label="Title"
                            />
                        </Col>

                        <Col span={24} style={{ margin: "10px 0" }}>
                            <FormTextArea
                                name="description"
                                label="Description"
                                rows={10}
                            />
                        </Col>
                        <Col span={8} style={{ margin: "10px 0" }}>
                            <UploadImage
                                name="file"
                            />
                        </Col>
                    </Row>
                </div>
                <Button htmlType="submit" type="primary" className="bg-primary">submit</Button>
            </Form>
        </>
    )
}

export default CreateAdminPage;