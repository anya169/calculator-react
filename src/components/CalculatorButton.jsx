import React from 'react';
import { Button } from 'react-bootstrap';

function CalculatorButton({ label, variant = 'primary', onClick }) {
    return (
        <Button
            variant={variant}
            onClick={onClick}
            className="calculator-btn p-3"
        >
            {label}
        </Button>
    );
}

export default CalculatorButton;