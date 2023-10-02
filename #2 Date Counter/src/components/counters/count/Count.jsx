function Count({ count, setCount, step }) {
  return (
    <>
      <button onClick={() => setCount((prev) => prev - step)}>-</button>
      <p>COUNT: {count}</p>
      <button onClick={() => setCount((prev) => prev + step)}>+</button>
    </>
  );
}

export default Count;
