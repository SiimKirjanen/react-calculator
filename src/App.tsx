import React, { useState } from 'react';
import Button from './components/Button/Button';
import HistoryTable from './components/HistoryTable/HistoryTable';
import Select from './components/Select/Select';
import { OperationHistory } from './interfaces/operationHistory.interface';
import { OperationSelection } from './enums/operationSelection';
import Input from './components/Input/Input';
import { findHighestPrimeBetweenToNumbers } from './utils/numbers';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [activeOperation, setActiveOperation] = useState<OperationSelection>(OperationSelection.sum);
  const [operationHistory, setOperationHistory] = useState<OperationHistory[]>([]);
  const [firstOperand, setFirstOperand] = useState<string>('');
  const [secondOperand, setSecondOperand] = useState<string>('');
  const operationSelection = [OperationSelection.sum, OperationSelection.divide, OperationSelection.remainder, OperationSelection.highestPrime];

  const changeActiveOperation = (operation: OperationSelection) => {
    setActiveOperation(operation);
  };

  const calculate = () => {
    const firstNumber = parseInt(firstOperand);
    const secondNumber = parseInt(secondOperand);

    switch(activeOperation) {
      case OperationSelection.sum:
          setOperationHistory(prevState  => [...prevState ,{ operation: firstOperand + '+' + secondOperand, result: firstNumber + secondNumber }]);
        break;

        case OperationSelection.divide:
          setOperationHistory(prevState  => [...prevState ,{ operation: firstOperand + '/' + secondOperand, result: firstNumber / secondNumber}]);
        break;

        case OperationSelection.remainder:
          setOperationHistory(prevState  => [...prevState ,{ operation: firstOperand + '%' + secondOperand, result: firstNumber % secondNumber}]);
        break;

        case OperationSelection.highestPrime:
          setOperationHistory(prevState  => [...prevState ,{ operation: 'Highest prime between ' + firstOperand + ' and ' + secondOperand, result: findHighestPrimeBetweenToNumbers(firstNumber, secondNumber) }]);
        break;
    }
  }

  const handleOperationChange = (event: React.ChangeEvent<HTMLInputElement>, id: string) => {
    if(id === 'first-operand') {
      setFirstOperand(event.target.value);
    }else if(id === 'second-operand') {
      setSecondOperand(event.target.value);
    }
  }
  
  return (
    <div className='app'>
      <Input handleChange={handleOperationChange} id='first-operand' />
      <Input handleChange={handleOperationChange} id='second-operand' />
      <Select 
        options={operationSelection} 
        activeOperation={activeOperation}
        setActiveOperation={changeActiveOperation} />
      <Button buttonClick={calculate}>Calculate</Button>
      <HistoryTable operationHistory={operationHistory} />
    </div>
  );
}

export default App;
