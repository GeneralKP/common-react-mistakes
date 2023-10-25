import { useRef } from "react";
import "./App.css";

function App() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <h3>Form without use state</h3>
      <label htmlFor="email">Email</label>
      <input ref={emailRef} type="email" id="email" />
      <label htmlFor="password">Password</label>
      <input ref={passwordRef} type="password" id="password" />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
