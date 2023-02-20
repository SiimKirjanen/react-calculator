import React, { useState } from 'react';
import Button from './components/Button/Button';
import HistoryTable from './components/HistoryTable/HistoryTable';
import Select from './components/Select/Select';
import { OperationHistory } from './interfaces/operationHistory.interface';
import { OperationSelection } from './enums/operationSelection';
import Input from './components/Input/Input';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

function App() {
  const [activeOperation, setActiveOperation] = useState(OperationSelection.sum);
  const [operationHistory, setOperationHistory] = useState<OperationHistory[]>([]);
  const [firstOperand, setFirstOperand] = useState('');
  const [secondOperand, setSecondOperand] = useState('');
  const operationSelection = [OperationSelection.sum, OperationSelection.divide, OperationSelection.remainder, OperationSelection.highestPrime];

  const changeActiveOperation = (operation: OperationSelection) => {
    setActiveOperation(operation);
  };

  const calculate = () => {
    switch(activeOperation) {
      case OperationSelection.sum:
          setOperationHistory(prevState  => [...prevState ,{ operation: firstOperand + '+' + secondOperand, result: parseInt(firstOperand) + parseInt(secondOperand)}]);
        break;

        case OperationSelection.divide:
          setOperationHistory(prevState  => [...prevState ,{ operation: firstOperand + '/' + secondOperand, result: parseInt(firstOperand) / parseInt(secondOperand)}]);
        break;

        case OperationSelection.remainder:
          setOperationHistory(prevState  => [...prevState ,{ operation: firstOperand + '%' + secondOperand, result: parseInt(firstOperand) % parseInt(secondOperand)}]);
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
    <div>
      <HistoryTable operationHistory={operationHistory} />
      <Input handleChange={handleOperationChange} id='first-operand' />
      <Input handleChange={handleOperationChange} id='second-operand' />
      <Select 
        options={operationSelection} 
        activeOperation={activeOperation}
        setActiveOperation={changeActiveOperation} />
      <Button buttonClick={calculate}>Calculate</Button>
    </div>
  );
}

export default App;
