import React from 'react';
import './Button.css';

class Button extends React.Component {
    irAInformacion = () => {
        window.location.href = 'https://www.lasante.com.co/somos/';
    }

    render() {
        return (
            <div className="miBanner">
                <button className="miBoton" onClick={this.irAInformacion}>
                    EXPERIENCIA LA SANTÉ
                </button>
            </div>
        );
    }
}

export default Button;
