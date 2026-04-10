// src/components/ButtonPanel.jsx
import React from 'react';
import CalculatorButton from './CalculatorButton';

function ButtonPanel({ onButtonClick, onCalculate, onClear }) {

    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="Стереть" variant="danger" />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="+" variant="warning" />
                <CalculatorButton label="-" variant="warning" />
                <CalculatorButton label="/" variant="warning" />
                <CalculatorButton label="*" variant="warning" />
                <CalculatorButton label="." variant="warning" />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="7" variant="primary" />
                <CalculatorButton label="8" variant="primary" />
                <CalculatorButton label="9" variant="primary" />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="4" variant="primary" />
                <CalculatorButton label="5" variant="primary" />
                <CalculatorButton label="6" variant="primary" />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="1" variant="primary" />
                <CalculatorButton label="2" variant="primary" />
                <CalculatorButton label="3" variant="primary" />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="0" variant="primary" />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="=" variant="success" />
            </div>
        </div>
    );
}

export default ButtonPanel;