import { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <div className="container">
      <h1>Input Mirror</h1>
      <input
        type="text"
        className="inputField"
        value={input}
        onChange={handleInputChange}
        placeholder="Type something here..."
      />
      <p>Input mirror: {input || 'Start typing to see the magic!'}</p>
    </div>
  );
}

export default App;
