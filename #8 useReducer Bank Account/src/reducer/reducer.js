const TAMBAH_SALDO = 150000;
const KURANGI_SALDO = 50000;
const TAMBAH_PINJAMAN = 100000;

function reducer(state, action) {
  switch (action.type) {
    case "akunAktif":
      return {
        ...state,
        isActive: true
      };
    case "tambahSaldo":
      return {
        ...state,
        saldo: state.saldo + TAMBAH_SALDO
      };
    case "kurangiSaldo":
      return {
        ...state,
        saldo: state.saldo - KURANGI_SALDO
      };
    case "tambahPinjaman":
      return {
        ...state,
        pinjaman: state.pinjaman + TAMBAH_PINJAMAN,
        saldo: state.saldo + TAMBAH_PINJAMAN
      };
    case "bayarPinjaman":
      return {
        ...state,
        pinjaman: state.pinjaman - state.pinjaman,
        saldo: state.saldo - state.pinjaman
      };
    case "akunNonAktif":
      return {
        ...state,
        isActive: false
      };
    default:
      throw new Error("Unexpected type");
  }
}

export default reducer;
