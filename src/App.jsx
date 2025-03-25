import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CalculatorProvider } from './context/CalculatorContext'
import Calculator from './components/Calculator'
import Result from './components/Result'
import './App.css'

function App() {

  return (
    <CalculatorProvider>
      <Router>
        <Routes>
          <Route path='/' element={<Calculator/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </Router>
    </CalculatorProvider>
  );
};

export default App
