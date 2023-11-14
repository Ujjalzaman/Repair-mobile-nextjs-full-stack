'use client';

import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import FormTextArea from "@/components/Forms/FormTextArea";
import UploadImage from "@/components/Forms/uploadImage";
import FBreadCrumb from "@/components/UI/FBreadCrumb";
import { useGetBlogQuery, useUpdateBlogMutation } from "@/redux/api/blogApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image";
import { useRouter } from "next/navigation";

const EditAppointment = ({ params }: { params: any }) => {
    const { id } = params;
    const router = useRouter();
    const [updateBlog] = useUpdateBlogMutation();
    const { data } = useGetBlogQuery(id);

    const handleOnSubmit = async (values: any) => {
        message.loading("Updating ...")
        const obj = {...values};
        const file = obj['file'];
        delete obj['file'];
        const data = JSON.stringify(obj);
        const formData = new FormData();
        formData.append('file', file as Blob);
        formData.append('data', data);
        try {
            const res = await updateBlog({id, data: formData});
            if (!!res) {
                message.success("Successfully Blog Created !");
                router.push('/admin/blog')
            }
        } catch (error:any) {
            message.loading(error.message)
        }
    }

    const defaultValues = {
        title: data?.title || '',
        description: data?.description || '',
        img: data?.img || '',
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
            <h4 className="my-2">Update Blog Info</h4>
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
                            <div className="d-flex justify-content-center align-items-center gap-2">
                                {defaultValues?.img &&
                                    <div style={{ maxWidth: '100px' }}>
                                        <Image
                                            src={defaultValues?.img}
                                            alt="avatar"
                                            style={{ width: "100%" }}
                                            width={100}
                                            height={100}
                                        />
                                    </div>
                                }
                                <div>
                                    <label>Change Image </label>
                                    <UploadImage name="file" />
                                </div>
                            </div>
                        </Col>

                    </Row>
                </div>
                <Button htmlType="submit" type="primary" className="bg-primary">Update</Button>
            </Form>
        </>
    )
}

export default EditAppointment;