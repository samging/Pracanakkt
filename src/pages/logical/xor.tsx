import Logika5 from "./Logika5.png";

export default function Xor() {
  return (
    <div>
      <h1>XOR</h1>
      <p>
        Exklusivní logický součet – má na výstupu log. 1 pouze tehdy, pokud je
        na vstupech rozdílná log. hodnota.
      </p>
      <p>Matematický zápis: Y = /(A B)</p>
      <img src={Logika5} alt="LogikaXor" />
    </div>
  );
}
