// App.js
import React from 'react';
import ConverterForm from './components/converter/ConverterForm';
import './App.css'; // Import your main CSS file

const App = () => {
  return (
    <div className="app-container">
      <header>
        <h1>Crypto Currency Converter</h1>
      </header>
      <main>
        <ConverterForm />
      </main>
    </div>
  );
};

export default App;
