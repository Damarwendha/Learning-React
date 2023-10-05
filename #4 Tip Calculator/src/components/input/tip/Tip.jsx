export default function Tip({ children, tip, setTip }) {
  return (
    <>
      <p>{children}</p>
      <select value={tip} onChange={(e) => setTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing! (20%)</option>
      </select>
    </>
  );
}
