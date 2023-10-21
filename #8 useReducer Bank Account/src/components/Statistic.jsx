import formatRupiah from "../utils/formatRupiah";

function Statistic({ angka, text }) {
  return (
    <p>
      {text}: {formatRupiah(String(angka), "Rp. ")}
    </p>
  );
}

export default Statistic;
