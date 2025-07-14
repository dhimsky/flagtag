
const ContactInfo1 = () => {
    return (
        <div>
            <div className="space100"></div>
        <div className="contact-page">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="contact-boxs">
                            <div className="heading1">
                                <h2>Informasi Kontak</h2>
                                <div className="space16"></div>
                                <p>Kami tumbuh bersama, dan kami tahu cara mewujudkannya</p>
                            </div>
                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon1.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Hubungi Kami</h5>
                                    <a href="https://api.whatsapp.com/send/?phone=6281233308691&text&type=phone_number&app_absent=0" className="text">+62 8123 330 8691</a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon2.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Kirimi Kami Email</h5>
                                    <a href="mailto:berkahmanutgusti01@gmail.com " className="text">berkahmanutgusti01@gmail.com </a>
                                </div>
                            </div>

                            <div className="contact-box">
                                <div className="icon">
                                    <img src="/assets/img/icons/contact-page-icon3.png" alt="" />
                                </div>
                                <div className="heading">
                                    <h5>Alamat</h5>
                                    <a href="https://api.whatsapp.com/send/?phone=6281233308691&text&type=phone_number&app_absent=0" className="text">Sleman, Yogyakarta</a>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact-form-details">
                            <form action="#">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="email" placeholder="Email" />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="single-input">
                                            <input type="number" placeholder="Phone" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <input type="text" placeholder="Subject" />
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="single-input">
                                            <textarea cols="30" rows="5" placeholder="Message"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button className="theme-btn1">Submit <span><i className="bi bi-arrow-right"></i></span></button>
                                    </div>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="space100"></div>

    </div>

    );
};

export default ContactInfo1;