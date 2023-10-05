export default function Output({ states }) {
  function percentage(firstTip, secondTip, bill) {
    return bill * ((firstTip + secondTip) / 2 / 100);
  }
  const totalTip = percentage(states.firstTip, states.secondTip, states.bill).toFixed(2);
  return (
    <p>
      <strong>
        You pay ${Number(states.bill) + totalTip} (${states.bill} + ${totalTip} tip)
      </strong>
    </p>
  );
}
