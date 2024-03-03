import React, { useState } from 'react';
import imagenLogo from '../images/Logo.png';
import "./Menu.css";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <img src={imagenLogo} alt="logo" />
            </div>
            <div className="menu">
                <p>Somos</p>
                <p>Medicamentos Bioequivalentes</p>
                <p>Farmacovigilancia</p>
                <div className="dropdown">
                    <p onClick={() => setIsOpen(!isOpen)}>Blog La Santé</p>
                    {isOpen && (
                        <div className="dropdown-content">
                            <p>Ver todas las entradas</p>
                            <p>Todo acerca del Glaucoma</p>
                            <p>Salud Visual</p>
                            <p>Alergias</p>
                            <p>Hipertensión Arterial</p>
                            <p>Vitamina C</p>
                            <p>Infecciones virales</p>
                            <p>Bacterias</p>
                            <p>Antihistamínicos</p>
                        </div>
                    )}
                </div>
                <p>Contacto</p>
            </div>
        </div>
    );
};

export default NavBar;
