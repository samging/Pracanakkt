import "./tables.css";
import Priklad1 from "./Priklad1.png";

export default function St() {
  return (
    <div>
      <h1 className="parent">Sériové zapojení</h1>
      <code>
        <div className="parent">
          <p>
            Uc = <span className="based">12V</span>
          </p>
          <p>
            Rc = <span className="based">20Ω</span>
          </p>
          <p>
            Ic = <span className="based">0,6A</span>
          </p>
        </div>
        <div className="parent">
          <p>
            R1 = <span className="based">20Ω</span>
          </p>
          <p>
            U1 = <span className="based">12V</span>
          </p>
          <p>
            I1 = <span className="based">0,6A</span>
          </p>
        </div>
        <div className="parent">
          <h2>Výpočty:</h2>
          <p>
            U1 =U1/UC = <span className="count">R1/Rc</span>
          </p>
          <p>
            Ic = <span className="count">Uc/Rc</span>
          </p>
          <p>
            I1 = <span className="count">U1/R1</span>
          </p>
          <img className="parent" src={Priklad1} alt="Priklad1" />
        </div>
      </code>
    </div>
  );
}
