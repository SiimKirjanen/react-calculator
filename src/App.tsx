import React from 'react';

import './App.css';
import Button from './components/Button/Button';
import HistoryTable from './components/HistoryTable/HistoryTable';
import Select from './components/Select/Select';
import { OperationHistory } from './interfaces/operationHistory.interface';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  let operationHistory: OperationHistory[] = [];
  let operationSelection = ['sum', 'divide', 'remainder', 'highest prime'];
  let activeOperation = 'sum';

  const changeActiveOperation = (operation: string) => {
    activeOperation = operation;
  };
  
  return (
    <div className="app">
      <HistoryTable operationHistory={operationHistory} />
      <Select 
        options={operationSelection} 
        activeOperation={activeOperation}
        setActiveOperation={changeActiveOperation} />
      <Button buttonClick={() => {}}>Calculate</Button>
    </div>
  );
}

export default App;
