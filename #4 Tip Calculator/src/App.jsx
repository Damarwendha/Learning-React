import { useState } from "react";
import "./styles.css";
import Input from "./components/input/Input";
import Output from "./components/output/Output";
import Reset from "./components/reset/Reset";

export default function App() {
  const [bill, setBill] = useState("");
  const [firstTip, setFirstTip] = useState(0);
  const [secondTip, setSecondTip] = useState(0);

  const states = {
    bill: bill,
    setBill: setBill,
    firstTip: firstTip,
    setFirstTip: setFirstTip,
    secondTip: secondTip,
    setSecondTip: setSecondTip
  };

  return (
    <div className="App">
      <Input states={states} />
      <Output states={states} />
      <Reset states={states} />
    </div>
  );
}
