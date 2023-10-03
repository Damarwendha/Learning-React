function Step({ step, setStep }) {
  return (
    <div>
      <input
        type="range"
        min="1"
        max="10"
        value={step}
        onChange={(e) => setStep(Number(e.target.value))}
      ></input>
      <span>{step}</span>
    </div>
  );
}

export default Step;
