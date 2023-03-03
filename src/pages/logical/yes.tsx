import Logika7 from "./Logika7.png";

export default function Yes() {
  return (
    <div>
      <h1>YES</h1>
      <p>
        Opakovač – na výstupu je vždy stejná logická hodnota jako na vstupu.
      </p>
      <p>Matematický zápis: Y = A</p>
      <img src={Logika7} alt="LogikaYes" />
    </div>
  );
}
