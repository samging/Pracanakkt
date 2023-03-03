import Logika1 from "./Logika1.png";
export default function And() {
  return (
    <div>
      <h1>AND</h1>
      <p>
        Logický součin – má na výstupu log. 1 pouze tehdy, je-li na všech jeho
        vstupech log. 1.
      </p>
      <p>Matematický zápis: Y = A * B</p>
      <img src={Logika1} alt="LogikaAnd" />
    </div>
  );
}
