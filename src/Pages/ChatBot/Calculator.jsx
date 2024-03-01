import React, { useState } from 'react';

const Calculator = () => {
    const [displayValue, setDisplayValue] = useState('');

    const handleButtonClick = (value) => {
        setDisplayValue((prevValue) => prevValue + value);
    };

    const handleClear = () => {
        setDisplayValue('');
    };

    const handleCalculate = () => {
        try {
            const result = eval(displayValue);
            setDisplayValue(result.toString());
        } catch (error) {
            setDisplayValue('Error');
        }
    };

    return (
        <div>
            <h1>React Calculator</h1>
            <input
                type="text"
                value={displayValue}
                readOnly
                style={{ width: '100%', padding: '10px', fontSize: '16px', marginBottom: '10px' }}
            />
            <div>
                <button onClick={() => handleButtonClick('1')}>1</button>
                <button onClick={() => handleButtonClick('2')}>2</button>
                {/* Add more number buttons */}
            </div>
            <div>
                <button onClick={() => handleButtonClick('+')}>+</button>
                <button onClick={() => handleButtonClick('-')}>-</button>
                {/* Add more operator buttons */}
            </div>
            <div>
                <button onClick={handleClear}>Clear</button>
                <button onClick={handleCalculate}>=</button>
            </div>
        </div>
    );
};

export default Calculator;
