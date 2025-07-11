import { Link } from "react-router-dom";

const Footer1 = () => {
    return (
        <div className="footer1 _relative">
        <div className="container">
             <div className="row">
                  <div className="col-lg-4 col-md-6 col-12">
                       <div className="single-footer-items footer-logo-area">
                            <div className="footer-logo">
                              <a href=""><img src="/assets/img/logo/header-logo1.png" alt="" /></a>
                            </div>
                            <div className="space20"></div>
                            <div className="heading1">
                              <p>Ambil langkah awal menuju transformasi produk yang lebih aman dan bernilai. Jadwalkan konsultasi dengan tim kami untuk mengeksplorasi solusi yang dapat membawa brand Anda ke level selanjutnya. </p>
                            </div>
                            <ul className="social-icon">
                                 {/* <li><a href="#"><i className="bi bi-linkedin"></i></a></li> */}
                                 <li><a href="https://x.com/flagshiiip?t=SkHjVoSMlmH6qm2NPDiKkw&s=09"><i className="bi bi-twitter"></i></a></li>
                                 <li><a href="https://youtube.com/@flagshiiiptokenium?si=iZ-H8zxjG6h9V9Pd"><i className="bi bi-youtube"></i></a></li>
                                 <li><a href="https://www.instagram.com/flagshiiip_tokenium?igsh=c3BqdDZibXA1eDA4"><i className="bi bi-instagram"></i></a></li>
                                 <li><a href="https://www.facebook.com/profile.php?id=61575954614517"><i className="bi bi-facebook"></i></a></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Halaman Lain</h3>

                            <ul className="menu-list">
                                 <li><Link target="_blank" to="https://flagshiiip.com/">Flagshiiip</Link></li>
                                 <li><Link target="_blank" to="https://flagbtc.flagshiiip.com/">FlagBTC</Link></li>
                                 <li><Link target="_blank" to="https://flaggold.flagshiiip.com/">FlagGold</Link></li>
                                 <li><Link target="_blank" to="https://flagai.id/">FlagAi</Link></li>
                            </ul>
                       </div>
                  </div>

                  <div className="col-lg col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Useful Links</h3>

                            <ul className="menu-list">
                                 <li><Link to="/about">About Us </Link></li>
                                 <li><Link to="/service">Our Services</Link></li>
                                 <li><Link to="/blog">Blog & News</Link></li>
                                 <li><Link to="/project">Project</Link></li>
                                 <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                       </div>
                  </div>


                  <div className="col-lg-3 col-md-6 col-12">
                       <div className="single-footer-items">
                            <h3>Contact Us</h3>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon1.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="tel:6281233308691">+62 8123 330 8691</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon2.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="https://api.whatsapp.com/send/?phone=6281233308691&text&type=phone_number&app_absent=0">+62 8123 330 8691</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon3.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="mailto:berkahmanutgusti01@gmail.com">berkahmanutgusti01@gmail.com</a>
                              </div>
                            </div>

                            <div className="contact-box">
                              <div className="icon">
                                <img src="/assets/img/icons/footer1-icon4.png" alt="" />
                              </div>
                              <div className="pera">
                                <a href="https://flagshiiip.com/">flagshiiip.com</a>
                              </div>
                            </div>

                       </div>
                  </div>

             </div>

             <div className="space40"></div>
        </div>

        <div className="copyright-area">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-5">
                   <div className="coppyright">
                     <p>Copyright @2025 Flagtag Rights Reserved</p>
                   </div>
              </div>
              <div className="col-md-7">
                   <div className="coppyright right-area">
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                   </div>
              </div>
         </div>
          </div>
     </div>

      </div>
    );
};

export default Footer1;