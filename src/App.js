import logo from './logo.svg';
import './App.css';
import React, { Children } from 'react';
import Header from './compnents/Header';
function App({children}) {
  return (
    <div className="App">
      <Header />
      {children}
    </div>
  );
}

export default App;
