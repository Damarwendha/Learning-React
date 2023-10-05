export default function Reset({ states }) {
  const resetHandler = () => {
    states.setBill("");
    states.setFirstTip(0);
    states.setSecondTip(0);
  };

  return <button onClick={resetHandler}>Reset</button>;
}
