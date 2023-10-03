function Count({ count, setCount, step }) {
  return (
    <div>
      <button onClick={() => setCount((prev) => Number(prev - step))}>-</button>
      <input
        type="number"
        value={count === 0 ? "" : count}
        onChange={(e) => setCount(Number(e.target.value))}
      ></input>
      <button onClick={() => setCount((prev) => Number(prev + step))}>+</button>
    </div>
  );
}

export default Count;
