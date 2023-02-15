import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App pb-40 ">
      <Home />
    </div>
  );
}

export default App;
