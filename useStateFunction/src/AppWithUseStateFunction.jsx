import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  const adjustCount = (amount) => {
    setCount((localCount) => localCount + amount);
    setCount((localCount) => localCount + amount);
    setCount((localCount) => localCount + amount);
    setCount((localCount) => localCount + amount);
    setCount((localCount) => localCount + amount);
    setCount((localCount) => localCount + amount);
    console.log(count); //Quiero ver este valor en cada render
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
