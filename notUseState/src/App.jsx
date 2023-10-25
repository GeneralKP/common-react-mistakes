import { useState } from "react";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      email,
      password,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Use state form</h3>
      <label htmlFor="stateEmail">Email</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        id="stateEmail"
      />
      <label htmlFor="statePassword">Password</label>
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        id="statePassword"
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
