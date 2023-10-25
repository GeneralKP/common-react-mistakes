import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const adjustCount = (amount) => {
    setCount(count + amount);
    setCount(count + amount);
    setCount(count + amount);
    setCount(count + amount);
    setCount(count + amount);
    setCount(count + amount);
  };

  return (
    <>
      <button onClick={() => adjustCount(-1)}>-</button>
      <span>{count}</span>
      <button onClick={() => adjustCount(1)}>+</button>
    </>
  );
}

export default App;
