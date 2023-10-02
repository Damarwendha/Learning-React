function Step({ step, setStep }) {
  return (
    <>
      <button onClick={() => setStep((prev) => prev - 1)}>-</button>
      <p>STEP: {step}</p>
      <button onClick={() => setStep((prev) => prev + 1)}>+</button>
    </>
  );
}

export default Step;
