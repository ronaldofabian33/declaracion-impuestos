// src/App.js
import React from 'react';
import myImage from './images/myImage.jpg'; // Asegúrate de que la ruta sea correcta

const App = () => {
    return (
        <div>
            <h1>Mi Aplicación</h1>
            <img src={myImage} alt="Descripción de la imagen" style={{ width: '100%', height: 'auto' }} />
        </div>
    );
};

export default App;
