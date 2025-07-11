import About1 from "../Components/About/About1";
import Award1 from "../Components/Award/Award1";
import Choose1 from "../Components/Choose/Choose1";
import Cta1 from "../Components/Cta/Cta1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";

import Services1 from "../Components/Services/Services1";


const Home = () => {
    return (
        <div className="home-page1">
            <HeroBanner1
                bgImg="/assets/img/bg/hero1-bg.png"
                subTitle="Flagtag"
                title="Transform Your Brand into a <span class='after'>Digital Asset</span>"
                content="Solusi modern untuk mengonversi aset atau produk fisik menjadi token digital berbasis blockchain. Dengan Loyalty Brand, kamu bisa membuka akses kepemilikan, distribusi, dan investasi yang lebih luas, cepat, dan transparan."
                btnName="Get Started Now"
                btnUrl="/contact"
                image1="/assets/img/hero/hero1-image1.png"
                image2="/assets/img/hero/hero1-image2.png"
                shapeImage1="/assets/img/hero/hero1-image3.png"
                shapeiamge2="/assets/img/hero/hero1-image4.png"
            ></HeroBanner1>
            <Award1></Award1>
            <About1
                image1="/assets/img/about/about1-img1.png"
                image2="/assets/img/about/about1-img2.png"
                supIcon="/assets/img/icons/about1-shape-icon.png"
                supTitle="24/7 Support"
                supCon="Kami selalu ada untuk kebutuhan anda"
                subTitle="About Our Company"
                Title="Ubah Brand Jadi Aset Digital Bernilai"
                content="Kami adalah perusahaan teknologi yang membantu brand mengamankan produk mereka melalui sistem verifikasi cerdas berbasis kode unik. Dengan solusi ini, setiap produk dapat dipastikan keasliannya dan memiliki nilai tambah yang dapat terhubung langsung dengan konsumen."
                featurelist={[
                    "Memberikan nilai digital terverifikasi pada setiap produk.",
                    "Memastikan keaslian produk melalui kode unik.",
                    "Membangun interaksi langsung antara brand dan konsumen.",
                ]}
                btnName="Discover More"
                btnUrl="/about"
            ></About1>
            <Services1></Services1>
            <Choose1></Choose1>
            {/* <Project1></Project1>
            <Pricing1></Pricing1>
            <Testimonial1></Testimonial1>
            <Blog1></Blog1> */}
            <Cta1></Cta1>
        </div>
    );
};

export default Home;