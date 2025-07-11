import { Link } from "react-router-dom";

const Vission1 = () => {
    return (
        <div className="solution about-solution sp">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="images">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="image">
                      <img src="/assets/img/about/visiton-img1.png" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="/assets/img/about/visiton-img2.png" alt="" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="space30"></div>
                    <div className="image">
                      <img src="/assets/img/about/visiton-img3.png" alt="" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="heading1">
                <span className="span"><img src="/assets/img/icons/span1.png" alt="" /> Our Vision</span>
                <h2>Mendorong Inovasi: Visi Flagtag</h2>
                <div className="space16"></div>
                <p>Visi kami adalah menjadi pelopor dalam solusi digital yang membantu brand berkembang dengan lebih aman, transparan, dan bernilai tinggi. Kami membayangkan masa depan di mana setiap produk memiliki identitas digital yang dapat dipercaya dan mudah diakses oleh konsumen.</p>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="/assets/img/icons/about-solution-iocn1.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#">Sistem Validasi Produk</a></h3>
                    <div className="space10"></div>
                    <p>Bangun kepercayaan konsumen dengan sistem validasi yang aman dan mudah digunakan.</p>
                  </div>
                </div>

                <div className="item-box">
                  <div className="icon">
                    <div className="">
                      <img src="/assets/img/icons/about-solution-iocn2.png" alt="" />
                    </div>
                  </div>
                  <div className="">
                    <h3><a href="#"> Layanan Integrasi Pintar</a></h3>
                    <div className="space10"></div>
                    <p>Fokus pada bisnis Anda, biarkan kami bantu integrasi sistem cerdas untuk tiap produk Anda.</p>
                  </div>
                </div>

                <div className="space30"></div>
                <div className="">
                  <Link className="theme-btn1" to="/contact">Get A Quote <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
};

export default Vission1;