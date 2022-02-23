import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [disabled, setDisabled] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="count">{counter}</h3>
        <button
          data-testid="plus-button"
          disabled={disabled}
          onClick={() => {
            setCounter(counter + 1);
          }}
        >
          +
        </button>
        <button
          data-testid="minus-button"
          disabled={disabled}
          onClick={() => {
            setCounter(counter - 1);
          }}
        >
          -
        </button>
        <button
          onClick={() => {
            setDisabled(!disabled);
          }}
          data-testid="on/off-button"
          style={{ backgroundColor: "blue" }}
        />
      </header>
    </div>
  );
}

export default App;
