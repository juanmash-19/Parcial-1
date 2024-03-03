import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import imagen1 from '../images/principal1.jpg';
import imagen2 from '../images/principal2.jpg';
import imagen3 from '../images/principal3.jpg';
import imagen4 from '../images/principal4.jpg';
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <Carousel autoPlay infiniteLoop>
                <div>
                    <img src={imagen1} alt=" " />
                </div>
                <div>
                    <img src={imagen2} alt=" " />
                </div>
                <div>
                    <img src={imagen3} alt=" " />
                </div>
                <div>
                    <img src={imagen4} alt=" " />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;
