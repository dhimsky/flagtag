import SectionTitle from "../Common/SectionTitle";
import data from '../../Data/Home1/services1.json';
import { Link } from "react-router-dom";

const Services1 = () => {
    return (
        <div className="service sp">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 m-auto text-center">
                <div className="heading1">
                    <SectionTitle
                        SubTitle="Why Flagtag?"
                        Title="Kenapa Harus Flagtag?"
                    ></SectionTitle>
                </div>
              </div>
            </div>

            <div className="space30"></div>
            <div className="row">
            {data.map((item, i) => (
              <div key={i} className={item.addClass} data-aos="zoom-in-up" data-aos-duration="700">
                <div className="single-box">
                  <div className="icon">
                    <img src={item.icon} alt="" />
                  </div>
                  <div className="heading1">
                    <h4><Link to={item.btnLink}>{item.title}</Link></h4>
                    <div className="space16"></div>
                    <p>{item.desc}</p>
                    <div className="space16"></div>
                  </div>
                </div>
              </div>
                ))}
              
            </div>
          </div>
        </div>
    );
};

export default Services1;