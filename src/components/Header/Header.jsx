import React from 'react';
import facebookImage from '../images/facebook.jpg';
import instagramImage from '../images/instagram.jpg';
import "./Header.css"; 

const Header = () => {
    return (
        <header className='main-header'>
            <div className='container'>
                <span>Servicioalcliente@lasante.com.co</span>
                <div>
                <a href="https://www.facebook.com/medicamentoslasante/">
                        <img src={facebookImage} alt="Facebook Logo" />
                </a>
                <a href="https://www.instagram.com/medicamentoslasante/">
                        <img src={instagramImage} alt="Instagram Logo" />
                </a>
                    <input type="text" placeholder='Buscar'/>
                    <input type="button" value='Enter' />
                </div>
            </div>
        </header>
    );
};

export default Header;
