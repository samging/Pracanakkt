import Logika3 from "./Logika3.png";

export default function Or() {
  return (
    <div>
      <h1>OR</h1>
      <p>
        Logický součet – má na výstupu log. 1 pouze tehdy, pokud je alespoň na
        jednom vstupu log. 1.
      </p>
      <p>Matematický zápis: Y = A + B</p>
      <img src={Logika3} alt="LogikaOR" />
    </div>
  );
}
