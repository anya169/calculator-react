import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Calculator from './components/Calculator';
import './App.css';

function App() {
    return (
        <div className="App">
            <h1 className="text-center mt-4 mb-4">Калькулятор React</h1>
            <Calculator />
        </div>
    );
}

export default App;