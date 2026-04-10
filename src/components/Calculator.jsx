import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';

function Calculator() {
    return (
        <div className="calculator-container">
            <Display value="0" />
            <ButtonPanel />
        </div>
    );
}

export default Calculator;