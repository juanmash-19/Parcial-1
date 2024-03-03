import React from 'react';
import './Cards.css';
import Image1 from '../images/oftalmico.png'
import Image2 from '../images/interna.png'
import Image3 from '../images/nervioso.png'
import Image4 from '../images/vida.png'
import Image5 from '../images/antiinfecciosos.png'

const Card = ({ title, description, src}) => (
    <div className="card">
        <img src={src} alt={title} />
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);

const App = () => {
    const cards = [
        { title: 'OFTÁLMICOS', description: 'Soluciones oftálmicas para la salud visual...', src : Image1 },
        { title: 'MEDICINA INTERNA', description: 'Enfocados en el manejo de los más frecuentes trastornos...', src: Image2 },
        { title: 'SISTEMA NERVIOSO', description: 'Tratamientos dirigidos a los trastornos de sueño, depresión...', src: Image3 },
        { title: 'CALIDAD DE VIDA', description: 'Medicamentos contra el dolor y la inflamación...', src: Image4 },
        { title: 'INFECTIOSOS', description: 'Enfocados en el tratamiento de infecciones...', src: Image5 },
    ];

    return (
        <div className="card-container">
            <div className="header-text">
                Contamos con un portafolio especializado para cualquier tipo de necesidad ¡Conócelo!
            </div>
            {cards.map((card, index) => (
                <Card key={index} title={card.title} description={card.description} src={card.src} />
            ))}
        </div>
    );
};

export default App;
