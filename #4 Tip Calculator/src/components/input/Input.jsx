import Tip from "./tip/Tip";
import Bill from "./bill/Bill";

export default function Input({ states }) {
  return (
    <div>
      <Bill states={states} />
      <Tip states={states} tip={states.firstTip} setTip={states.setFirstTip}>
        How did you like the service?
      </Tip>
      <Tip states={states} tip={states.secondTip} setTip={states.setSecondTip}>
        How did your friend like the service?
      </Tip>
    </div>
  );
}
