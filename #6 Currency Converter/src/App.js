import { useEffect, useState } from "react";

export default function App() {
  const [input, setInput] = useState(1);
  const [initialCurr, setInitialCurr] = useState("USD");
  const [conversionCurr, setConversionCurr] = useState("CAD");
  const [output, setOutput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);

  function handleInput(e) {
    setInput(Number(e.target.value));
    setIsTyping(true);
  }

  function handleInitialCurr(e) {
    setInitialCurr(e.target.value);
    setIsLoading(true);
  }

  function handleConversionCurr(e) {
    setConversionCurr(e.target.value);
    setIsLoading(true);
  }

  useEffect(() => {
    async function fetchCurr() {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${input}&from=${initialCurr}&to=${conversionCurr}`
        );
        const data = await res.json();
        setOutput(data.rates[conversionCurr]);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    // ter-eksekusi jika tidak mengtrigger onChange selama 700ms
    const timeout = setTimeout(() => {
      if (initialCurr !== conversionCurr && input > 0) fetchCurr();
      else if (initialCurr === conversionCurr) setIsLoading(false);
      setIsTyping(false); // apapun itu ketika timeout tereksekusi, isTyping jadi false
    }, 700);

    return () => {
      setOutput("");
      clearTimeout(timeout);
    };
  }, [input, initialCurr, conversionCurr, isTyping]);

  return (
    <form>
      <input
        type="text"
        value={input}
        onChange={handleInput}
        disabled={isLoading}
      />
      <Select onChange={handleInitialCurr} curr={initialCurr} />
      <span> to </span>
      <Select onChange={handleConversionCurr} curr={conversionCurr} />
      <p>
        {output ||
          (isLoading ? "Loading..." : false) ||
          (isTyping ? "Typing..." : false) ||
          input}
        {/* input, ter-eksekusi jika dua kurensi equal */}
        {!isLoading && !isTyping && " " + conversionCurr}
      </p>
    </form>
  );
}

function Select({ onChange, curr }) {
  return (
    <select onChange={onChange} value={curr}>
      <option value="USD">USD</option>
      <option value="EUR">EUR</option>
      <option value="CAD">CAD</option>
      <option value="INR">INR</option>
    </select>
  );
}
