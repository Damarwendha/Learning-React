import { useState } from "react";
import Step from "./components/counters/step/Step";
import Count from "./components/counters/count/Count";
import Dates from "./components/date/Dates";
import "./styles.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Step step={step} setStep={setStep} />
      <Dates count={count} />
      <Count setCount={setCount} count={count} step={step} />
    </div>
  );
}

export default App;
