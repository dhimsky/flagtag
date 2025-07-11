import { Link } from "react-router-dom";

const Mission1 = () => {
    return (
        <div className="solution sp bg1">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="heading1">
                  <span className="span"><img src="/assets/img/icons/span1.png" alt="" /> Our Mission</span>
                  <h2>Inovasi untuk Nilai Lebih: Misi Teknologi Flagtag</h2>
                  <div className="space16"></div>
                  <p>Di Flagtag, misi kami sederhana: membantu brand menghadapi era digital dengan solusi yang meningkatkan nilai produk, keamanan, dan kepercayaan konsumen. Kami hadir sebagai mitra terpercaya untuk menjawab tantangan transformasi digital masa kini.</p>
                  <div className="space16"></div>
                  <p>Kami percaya bahwa teknologi harus memberi dampak nyata. Dengan inovasi yang terarah dan layanan yang disesuaikan, Flagtag berkomitmen menjadi katalisator perubahan positif bagi brand Anda di era digital.</p>

                  <div className="space30"></div>
                  <div className="">
                    <Link className="theme-btn1" to="/contact">Get A Quote <span><i className="bi bi-arrow-right"></i></span></Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="solution-images">
                  <div className="image1">
                    <img src="/assets/img/others/solution-img1.png" alt="" />
                  </div>
                  <div className="image2">
                    <img src="/assets/img/others/solution-img2.png" alt="" />
                  </div>
                  <div className="image3">
                    <img src="/assets/img/others/solution-img3.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Mission1;