import React, { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import '../styles/Calculator.css';
import { appendSymbol, calculate, clearAll } from '../scripts/calculatorLogic';


function Calculator() {
    // Текущее выражение на дисплее, используем функцию setExpression, чтобы устанавливать его
    // Так как в React запрещено менять напрямую через =
    // По умолчанию равно нулю
    const [expression, setExpression] = useState('0');

    // Функция обработки нажатия на цифры и операторы
    const handleButtonClick = (symbol) => {
        // Заменяем предыдущее выражение (prev от previous - предыдущий)
        // На новое, которое нам вернула функция из нашей логики калькулятора
        setExpression(prev => appendSymbol(prev, symbol));
    };

    // Функция подсчета
    const handleCalculate = () => {
        setExpression(prev => calculate(prev));
    };

    // Функция очистки
    const handleClear = () => {
        setExpression(clearAll());
    };

    return (
        <div className="calculator-container">
            <Display value={expression} />
            <ButtonPanel 
                onButtonClick={handleButtonClick}
                onCalculate={handleCalculate}
                onClear={handleClear}
            />
        </div>
    );
}

export default Calculator;