export default function Bill({ states }) {
  return (
    <>
      <p>How much was the bill?</p>
      <input
        type="number"
        pattern="[0-9]*"
        value={states.bill}
        onChange={(e) => states.setBill(e.target.value)}
      ></input>
    </>
  );
}
