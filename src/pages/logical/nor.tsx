import Logika4 from "./Logika4.png";

export default function Nor() {
  return (
    <div>
      <h1>NOR</h1>
      <p>
        Negovaný logický součet – má na výstupu log. 1 pouze tehdy, pokud je na
        všech vstupech log. 0. Je to negovaný (opačný) výsledek logického součtu
        (OR).
      </p>
      <p>Matematický zápis: Y = /(A + B)</p>
      <img src={Logika4} alt="LogikaNor" />
    </div>
  );
}
