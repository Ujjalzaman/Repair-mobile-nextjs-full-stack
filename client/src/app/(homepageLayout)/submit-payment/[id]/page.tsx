'use client';
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import SubHeader from "@/components/UI/SubHeader";
import { Button, Col, Input, Row } from "antd";

const PaymentPage = () => {
    const base = 'customer';
    // const [addService] = useAddServiceMutation();
    // const router = useRouter();

    const serviceRequestOnSubmit = async () => {
        // message.loading("Creating ...");
        // const obj = { ...values };
        // const file = obj['file'];
        // delete obj['file'];
        // const data = JSON.stringify(obj);
        // const formData = new FormData();
        // formData.append('file', file);
        // formData.append('data', data)
        // try {
        //     const res = await addService(formData);
        //     if (res) {
        //         message.success("Successfully Added Service Request !");
        //         Swal.fire({
        //             icon: "success",
        //             title: "Appointment Schedule",
        //             text: 'We will email you meeting Link',
        //             showConfirmButton: false,
        //             timer: 6000
        //           });
        //         router.push('customer/service-request')
        //     }
        // } catch (error: any) {
        //     message.error(error.message)
        // }

    }
    return (
        <div>
            <SubHeader title='Get Appointment' />
            <div className="container-full mx-4" style={{ marginTop: '7rem', marginBottom: '8rem' }}>
                <div className="row">
                    <div className="col-md-9">
                        <div className='container'>
                            <div>
                                <Form submitHandler={serviceRequestOnSubmit}>
                                    <div
                                        style={{
                                            border: "1px solid #d9d9d9",
                                            borderRadius: "5px",
                                            padding: "15px",
                                            marginBottom: "10px",
                                        }}
                                    >
                                        <p style={{ fontSize: "18px", fontWeight: "500", margin: "5px 0px" }}>
                                            Proceed to Submit Payment
                                        </p>
                                        <div className="row">
                                            <div className="col-md-6 col-sm-12">
                                                <div className="card shadow p-3 border-0" style={{ maxWidth: '25rem' }}>
                                                    <div className="d-flex justify-content-between align-items-center">
                                                        <div>
                                                            <p>Hardware Bill - </p>
                                                            <p>Software Bill - </p>
                                                            <p>Parts -</p>
                                                            <p>Techincian Bill - </p>
                                                            <p>Tex (including 15%) -</p>
                                                            <hr />
                                                            <p><b>Total Bill</b> -</p>
                                                        </div>

                                                        <div>
                                                            <p>120 $</p>
                                                            <p>120 $</p>
                                                            <p>15 $</p>
                                                            <p>120 $</p>
                                                            <p>15 $</p>
                                                            <hr />
                                                            <p><b>720 $</b></p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-md-6 col-sm-12">
                                                <div className="card shadow p-3 border-0 mb-2">
                                                    <div>
                                                        <h5>Technician Oversrbation</h5>
                                                        <p className="form-text">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, nihil quod! Consectetur quod, repellat vero temporibus fuga nulla totam consequuntur numquam ipsam ullam esse, veritatis hic, voluptas tenetur voluptate quae.
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="card shadow p-3 border-0">
                                                    <div>
                                                        <h5>Device Type Smapsung</h5>
                                                        <h5>Crack on My Phone</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }} >
                                            <Col span={12} style={{ margin: "10px 0" }}>
                                                <label>Service Request Number</label>
                                                <Input
                                                    name="serviceNumber"
                                                    type="text"
                                                    size="large"
                                                    defaultValue={15648674864}
                                                    disabled
                                                />
                                            </Col>
                                            <Col span={12} style={{ margin: "10px 0" }}>
                                                <label>Total Amount</label>
                                                <Input
                                                    name="amount"
                                                    type="text"
                                                    size="large"
                                                    defaultValue={120}
                                                    disabled
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                    <Button htmlType="submit" type="primary" className="bg-primary">submit</Button>
                                </Form>

                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-map-pin-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Address</h3>
                            <p>123 Amsterdem, Tronto, Canda</p>
                        </div>

                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-phone-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Phone Number</h3>
                            <p>+8801751040425</p>
                        </div>

                        <div className="rounded border-0 text-center py-5 mb-3" style={{ background: '#d7ded6', maxHeight: '13rem', overflow: 'hidden' }}>
                            <div style={{ fontSize: '1.5rem' }}>
                                <i className="ri-time-line text-primary"></i>
                            </div>
                            <h3 className="text-uppercase">Openning Hours</h3>
                            <p>All Day : 9AM to 6PM</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default PaymentPage