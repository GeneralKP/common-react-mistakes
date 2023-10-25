import { useEffect, useMemo, useState } from "react";
import "./App.css";

function App() {
  const [age, setAge] = useState(0);
  const [name, setName] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  const person = useMemo(() => {
    return { age, name };
  }, [age, name]);

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div style={{ backgroundColor: darkMode ? "#333" : "#FFF" }}>
      Age
      <input
        value={age}
        onChange={(e) => setAge(e.target.value)}
        type="number"
      />
      <br />
      Name:
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <br />
      Dark Mode:
      <input
        type="checkbox"
        value={darkMode}
        onChange={(e) => setDarkMode(e.target.checked)}
      />
    </div>
  );
}

export default App;
