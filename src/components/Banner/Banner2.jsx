import React, { useState, useEffect } from 'react';
import './Banner2.css';
import imagen1 from '../images/imagen1.png';
import imagen2 from '../images/imagen2.png';

const images = [imagen1, imagen2];

const Banner2 = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); 

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="banner2">
            <div className="top-text">
                Conoce algunos de nuestros productos
            </div>
            <img src={images[currentImageIndex]} alt="Producto" />
        </div>
    );
};

export default Banner2;
