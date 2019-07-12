import React from 'react';
import './App.scss';
import bem from 'helpers/bem';

function App() {
  const bemCls = bem('app');

  return (
    <div className={bemCls()}>
      
    </div>
  );
}

export default App;
