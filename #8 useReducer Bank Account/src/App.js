import { useReducer } from "react";
import "./styles.css";
import reducer from "./reducer/reducer";
import Button from "./components/Button";
import Statistic from "./components/Statistic";

const initialState = {
  saldo: 0,
  pinjaman: 0,
  isActive: false
};

export default function App() {
  const [{ saldo, pinjaman, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <Statistic angka={saldo} text="Saldo" />
      <Statistic angka={pinjaman} text="Pinjaman" />

      <Button
        onClick={() => dispatch({ type: "akunAktif" })}
        disabled={isActive}
        text="Buka akun"
      />
      <Button
        onClick={() => dispatch({ type: "tambahSaldo" })}
        disabled={!isActive}
        text="Deposit 150.000"
      />
      <Button
        onClick={() => dispatch({ type: "kurangiSaldo" })}
        disabled={!isActive || saldo <= 0}
        text="Cairkan 50.000"
      />
      <Button
        onClick={() => dispatch({ type: "tambahPinjaman" })}
        disabled={!isActive}
        text="Agar silaturahmi lancar, Minjam dulu 100.000"
      />
      <Button
        onClick={() => dispatch({ type: "bayarPinjaman" })}
        disabled={!isActive || saldo < pinjaman || pinjaman === 0}
        text="Bayar pinjaman"
      />
      <Button
        onClick={() => dispatch({ type: "akunNonAktif" })}
        disabled={!isActive}
        text="Tutup akun"
      />
    </div>
  );
}
