import "./App.css";
import { useState } from "react";
import ButtonPlus from "./components/ButtonPlus";
import ButtonMinus from "./components/ButtonMinus";
import ButtonReset from "./components/ButtonReset";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <div className="container">
        <ButtonMinus counter={counter} setCounter={setCounter} />
        <span className="counter">{counter}</span>
        <ButtonPlus counter={counter} setCounter={setCounter} />
      </div>
      <div className="reset">
        <ButtonReset counter={counter} setCounter={setCounter} />
      </div>
    </div>
  );
};

export default App;
