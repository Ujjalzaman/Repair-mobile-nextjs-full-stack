
const MembershipPlan = () => {
    const handleMembershipPlan = (type: string) => {
        // let payType = 
        // type === 'basic' 
        // ? 'price_1OE7dQKuo3j4qr1Nj4uRheqs' 
        // : type === 'gold'
        // ? 'price_1OE7cIKuo3j4qr1NYKy9RnXv'
        // : 'price_1OE7bTKuo3j4qr1N9gj30ehT'

        // if(payType){
        //     checkout({ lineItems: [{ price: payType ,quantity: 1 }]});
        // }
    }


    return (
        <div className="mx-auto" style={{ marginTop: "8rem", marginBottom: '7rem' }}>
            <div className="mb-5 text-center">
                <h3 style={{ fontWeight: "900" }} className="text-center text-uppercase">Membership plan</h3>
                <p className="form-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, vitae.</p>
            </div>

            <div className="container text-center px-4 py-5 rounded" style={{ background: '#d7ded6' }}>
                <div className="row align-items-center justify-content-center">
                    <div className="col" style={{ maxWidth: '20rem' }}>
                        <div className="card shadow text-center border-0">
                            <div className="flex-column card-header py-2 d-flex justify-content-center align-items-center" style={{ minHeight: '8rem' }}>
                                <h2 className="mt-3">$120</h2>
                                <p>Per Month</p>
                            </div>
                            <div className="card-body bg-secondary text-white rounded-bottom">
                                <h4 className="card-title p-2 my-2">Basic</h4>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="text-start">
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Computer Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            1 Phone Repair Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Leptop Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Leptop Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            Free Supports
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mx-auto">
                                    <button className="btn btn-primary w-50 border-0 rounded-pill" style={{ background: "#5543d1" }}>Phurchase</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" style={{ maxWidth: '20rem' }}>
                        <div className="card shadow text-center border-0">
                            <div className="flex-column card-header py-2 d-flex justify-content-center align-items-center" style={{ minHeight: '8rem' }}>
                                <h2 className="mt-3">$220</h2>
                                <p>Per Month</p>
                            </div>
                            <div className="card-body bg-secondary text-white rounded-bottom">
                                <h4 className="card-title p-2 my-2">Gold</h4>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="text-start">
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Computer Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            1 Phone Repair Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Leptop Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Leptop Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            Free Supports
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mx-auto">
                                    <button className="btn btn-primary w-50 border-0 rounded-pill" style={{ background: "#5543d1" }}>Phurchase</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col" style={{ maxWidth: '20rem' }}>
                        <div className="card shadow text-center border-0">
                            <div className="flex-column card-header py-2 d-flex justify-content-center align-items-center" style={{ minHeight: '8rem' }}>
                                <h2 className="mt-3">$320</h2>
                                <p>Per Month</p>
                            </div>
                            <div className="card-body bg-secondary text-white rounded-bottom">
                                <h4 className="card-title p-2 my-2">Premium</h4>
                                <div className="d-flex justify-content-center align-items-center">
                                    <div className="text-start">
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Computer Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            1 Phone Repair Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Leptop Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            2 Leptop Repair
                                        </div>
                                        <div className="p-2 border-bottom d-flex gap-2">
                                            <i className="ri-check-double-line"></i>
                                            Free Supports
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-4 mx-auto">
                                    <button className="btn btn-primary w-50 border-0 rounded-pill" style={{ background: "#5543d1" }}>Phurchase</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MembershipPlan