function Dates({ count }) {
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <p>
      {count} days from today is <strong>{date.toDateString()}</strong>
    </p>
  );
}

export default Dates;
