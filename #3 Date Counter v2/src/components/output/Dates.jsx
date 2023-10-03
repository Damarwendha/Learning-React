function Dates({ count }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p>
      {count === "" || count === 0 ? (
        <span>Today is </span>
      ) : count > 0 ? (
        <span>{count} days from today is </span>
      ) : (
        <span>{Math.abs(count)} days ago was </span>
      )}
      <strong>{date.toDateString()}</strong>
    </p>
  );
}

export default Dates;
