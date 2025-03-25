import React from "react";
import { useCalculator } from "../context/CalculatorContext";
import { Link } from "react-router-dom";

const Result = () => {
    const {selectedNumbers, reset} = useCalculator();
    const sumNumbers = selectedNumbers.reduce((acc, num) => acc+num, 0);

    return (
        <div>
            <h1>Resultado</h1>
            <div>
                <p>Numeros Seleccionados: {selectedNumbers.join(',')}</p>
                <p>resultado de la suma: {sumNumbers}</p>
            </div>
            <div>
                <button onClick={reset}>Resetear calculadora</button>
            </div>
            <div>
                <Link to={"/"}>Volver a la calculadore</Link>
            </div>
        </div>
    );
};

export default Result;