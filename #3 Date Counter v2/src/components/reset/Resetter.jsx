function Resetter({ setCount, count, setStep, step }) {
  const isChange = (count === 0 || count === "") && step === 1;
  return (
    <div>
      {isChange ? null : (
        <button
          className="reset"
          onClick={() => {
            setCount("");
            setStep(1);
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
export default Resetter;
