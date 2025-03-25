import React from "react";
import { useCalculator } from "../context/CalculatorContext";
import { Link } from "react-router-dom";

const Calculator = () => {
    const {addNumber, currentNumber} = useCalculator();

    const handleClick = (num) => {
        addNumber(num);
    };

    return(
        <div>
            <h1>Calculator</h1>
            <div>
                {[...Array(10).keys()].map((num) => (
                        <button key ={num} onClick={() => handleClick(num)}>
                            {num}
                        </button>
                ))}
            </div>
            <div>
                <p>Numero Actual Seleccionado: {currentNumber}</p>
            </div>
            <div>
                <Link to = '/result'>Ver Resultado</Link>
            </div>
        </div>

    );
};

export default Calculator;