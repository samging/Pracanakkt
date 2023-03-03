import Logika2 from "./Logika2.png";

export default function Nand() {
  return (
    <div>
      <h1>NAND</h1>
      <p>
        Negovaný logický součin – má na výstupu log. 1 pouze tehdy, pokud není
        na všech vstupech log. 1. Je to negovaný (opačný) výsledek logického
        součinu (AND). Je to nejpoužívanější log. člen.
      </p>
      <p>Matematický zápis: Y = /(A * B)</p>
      <img src={Logika2} alt="LogikaNand" />
    </div>
  );
}
