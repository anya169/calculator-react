// src/components/ButtonPanel.jsx
import React from 'react';
import CalculatorButton from './CalculatorButton';

function ButtonPanel({ onButtonClick, onCalculate, onClear }) {

    const handleClick = (btn) => {
        if (btn === '=') {
            onCalculate();
        } else if (btn === 'Стереть') {
            onClear();
        } else {
            onButtonClick(btn);
        }
    };

    return (
        <div className="d-flex flex-column gap-2">
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="Стереть" variant="danger" onClick={() => handleClick('Стереть')} />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="+" variant="warning" onClick={() => handleClick('+')} />
                <CalculatorButton label="-" variant="warning" onClick={() => handleClick('-')} />
                <CalculatorButton label="/" variant="warning" onClick={() => handleClick('/')} />
                <CalculatorButton label="*" variant="warning" onClick={() => handleClick('*')} />
                <CalculatorButton label="." variant="warning" onClick={() => handleClick('.')} />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="7" variant="primary" onClick={() => handleClick('7')} />
                <CalculatorButton label="8" variant="primary" onClick={() => handleClick('8')} />
                <CalculatorButton label="9" variant="primary" onClick={() => handleClick('9')} />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="4" variant="primary" onClick={() => handleClick('4')} />
                <CalculatorButton label="5" variant="primary" onClick={() => handleClick('5')} />
                <CalculatorButton label="6" variant="primary" onClick={() => handleClick('6')} />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="1" variant="primary" onClick={() => handleClick('1')} />
                <CalculatorButton label="2" variant="primary" onClick={() => handleClick('2')} />
                <CalculatorButton label="3" variant="primary" onClick={() => handleClick('3')} />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="0" variant="primary" onClick={() => handleClick('0')} />
            </div>
            <div className="d-flex flex-row justify-content-center gap-2">
                <CalculatorButton label="=" variant="success" onClick={() => handleClick('=')} />
            </div>
        </div>
    );
}
                

export default ButtonPanel;