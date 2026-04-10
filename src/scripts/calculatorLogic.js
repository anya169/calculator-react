// Функция добавления символа
export function appendSymbol(currentDisplay, symbol) {
    const operators = ['+', '-', '*', '/'];
    let displayValue = currentDisplay;

    // Если на экране ноль или ошибка
    if (displayValue === '0' || displayValue === 'Ошибка: деление на 0') {
        if (symbol === '.') {
            return displayValue + symbol;
        }
        else if (!operators.includes(symbol)) {
            return symbol;
        }
        return displayValue;
    }

    // Проверка на множественные точки в одном числе
    if (symbol === '.') {
        let lastOperatorPosition = -1;
        for (let i = displayValue.length - 1; i >= 0; i--) {
            if (operators.includes(displayValue[i])) {
                lastOperatorPosition = i;
                break;
            }
        }
        let currentNumber = displayValue.slice(lastOperatorPosition + 1);
        if (currentNumber.includes('.') || currentNumber === "") {
            return displayValue;
        }
    }

    // Проверяем последний и предпоследний символы
    let lastSymbol = displayValue[displayValue.length - 1];
    let penultimateSymbol = displayValue[displayValue.length - 2];

    if (operators.includes(lastSymbol) && operators.includes(symbol)) {
        if (symbol === '-') {
            if (lastSymbol === '-') {
                return displayValue;
            }
            return displayValue + symbol;
        } else {
            if (operators.includes(penultimateSymbol)) {
                return displayValue.slice(0, -2) + symbol;
            } else {
                return displayValue.slice(0, -1) + symbol;
            }
        }
    } else {
        return displayValue + symbol;
    }
}

// Функция вычисления результата
export function calculate(displayValue) {
    let result = 0;
    let numberArray = [];
    let operatorArray = [];
    
    let numberBeforeOperator = 0;
    let numberStartPosition = 0;

    for (let i = 0; i < displayValue.length; i++) {
        if (displayValue[i] === '+' || displayValue[i] === '-' || displayValue[i] === '*' || displayValue[i] === '/') {
            if (i === 0 && displayValue[i] === '-') {
                continue;
            }
            if (displayValue[i] === '-' && (displayValue[i-1] === '+' || displayValue[i-1] === '-' || displayValue[i-1] === '*' || displayValue[i-1] === '/')) {
                continue;
            }

            numberBeforeOperator = parseFloat(displayValue.slice(numberStartPosition, i));
            numberStartPosition = i + 1;
            numberArray.push(numberBeforeOperator);
            operatorArray.push(displayValue[i]);
        }
    }

    numberBeforeOperator = parseFloat(displayValue.slice(numberStartPosition, displayValue.length));
    if (!isNaN(numberBeforeOperator)) {
        numberArray.push(numberBeforeOperator);
    } else {
        operatorArray.pop();
    }

    if (numberArray.length === 0) {
        return '0';
    }

    result = numberArray[0];
    
    for (let i = 0; i < operatorArray.length; i++) {
        let nextNumber = numberArray[i + 1];
        let operator = operatorArray[i];
        
        if (operator === '+') {
            result = result + nextNumber;
        } else if (operator === '-') {
            result = result - nextNumber;
        } else if (operator === '*') {
            result = result * nextNumber;
        } else if (operator === '/') {
            if (nextNumber === 0) {
                return 'Ошибка: деление на 0';
            }
            result = result / nextNumber;
        }
    }

    return result.toFixed(5);
}

// Функция очистки
export function clearAll() {
    return '0';
}