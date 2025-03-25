import React, {createContext, useState, useContext, Children} from 'react';

const CalculatorContext = createContext();

export const CalculatorProvider = ({children}) => {
    const [selectedNumbers, setSelectedNumbers] = useState([]);
    const [currentNumbers, setCurrentNumbers] = useState(null)

    const addNumber = (num) => {
        setSelectedNumbers([...selectedNumbers, num]);
        setCurrentNumbers(num);
    };

    const reset = () => {
        setSelectedNumbers([]);
        setCurrentNumbers(null);
    };

    return (
        <CalculatorContext.Provider value={{selectedNumbers, currentNumbers, addNumber, reset}}>
            {children}
        </CalculatorContext.Provider>
    );
};

export const useCalculator = () => useContext(CalculatorContext);
