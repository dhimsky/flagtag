import About6 from "../Components/About/About6";
import BreadCumb from "../Components/Common/BreadCumb";
import Cta1 from "../Components/Cta/Cta1";
import Mission1 from "../Components/Mission/Mission1";
import Vission1 from "../Components/Mission/Vission1";

const AboutLight = () => {
    return (
        <div>
            <BreadCumb Title="About Us"></BreadCumb>
            {/* <MarqueeText></MarqueeText> */}
            <About6
                image1="/assets/img/about/about2-img1.png"
                image2="/assets/img/about/about2-img2.png"
                image3="/assets/img/about/about2-img3.png"
                experienceNum="8"
                experienceTitle="Tahun <br> Pengalaman"
                subTitle="Our Service"
                title="Tingkatkan Nilai Produk Anda dengan Solusi Digital Terpadu"
                content="Selamat datang di Flagtag, mitra terpercaya untuk digitalisasi dan proteksi produk Anda. Kami menghadirkan solusi inovatif yang membantu brand menjaga keaslian, membangun kepercayaan, dan meningkatkan interaksi konsumen."
                counName1="Verifikasi Produk"
                CounNum1="100%"
                counName2="Perlindungan Nilai Produk"
                CounNum2="98%"
            ></About6>
            <Mission1></Mission1>
            <Vission1></Vission1>
            <Cta1></Cta1>
        </div>
    );
};

export default AboutLight;