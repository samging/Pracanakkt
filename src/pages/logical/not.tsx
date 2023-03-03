import Logika6 from "./Logika6.png";

export default function Not() {
  return (
    <div>
      <h1>NOT</h1>
      <p>
        Logická negace (invertor) – na výstupu je vždy opačná logická hodnota
        než na vstupu.
      </p>
      <p>Matematický zápis: Y = /A</p>
      <img src={Logika6} alt="LogikaNot" />
    </div>
  );
}
