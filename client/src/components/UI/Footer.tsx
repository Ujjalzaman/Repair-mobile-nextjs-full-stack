const Footer = () => {
    return (
        <footer className="text-center text-white" style={{background:'#255598'}}>
            <div className="container p-4">
                <section className="mb-4">
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="ri-facebook-circle-fill"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="ri-google-line"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="ri-instagram-line"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="ri-linkedin-box-fill"></i></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"><i className="ri-github-fill"></i></a>
                </section>
                <section className="">
                    <form action="">
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4">
                                <div className="flex gap-2">
                                    <div className="form-outline form-white mb-4">
                                        <div className="form-group">
                                            <div className="text-start form-label">Sign up for our newsletter</div>
                                            <input type="email" id="form5Example21" className="form-control" placeholder="Input your email .." />
                                        </div>
                                    </div>
                                    <button type="submit" className="btn btn-outline-light mb-4">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </section>
                <section className="mb-4">
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum
                        repellat quaerat voluptatibus placeat nam, commodi optio pariatur est quia magnam
                        eum harum corrupti dicta, aliquam sequi voluptate quas.
                    </p>
                </section>
            </div>
            <div className="text-center p-3">
                © 2020 Copyright:
                <a className="text-white" href="https://ujjalzaman-b6c8a.web.app/">Ujjalzaman</a>
            </div>

        </footer>
    )
}

export default Footer