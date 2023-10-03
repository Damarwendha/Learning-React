import { useState } from "react";
import Step from "./components/input/step/Step";
import Count from "./components/input/count/Count";
import Dates from "./components/output/Dates";
import Resetter from "./components/reset/Resetter";
import "./styles.css";

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState("");

  return (
    <div className="App">
      <Step step={step} setStep={setStep} />
      <Count setCount={setCount} count={count} step={step} />
      <Dates count={count} />
      <Resetter
        setCount={setCount}
        count={count}
        setStep={setStep}
        step={step}
      />
    </div>
  );
}

export default App;
