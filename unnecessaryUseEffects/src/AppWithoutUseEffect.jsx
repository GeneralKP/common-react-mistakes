import { useState } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  //Se actualizará cada vez que el componente se actualice
  const fullName = `${firstName} ${lastName}`;

  console.log('render');
  
  return (
    <>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)} />
      <input value={lastName} onChange={(e) => setLastName(e.target.value)} />
      {fullName}
    </>
  );
}

export default App;
