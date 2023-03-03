import St from "../pages/examples/first";
import Nd from "../pages/examples/sec";
import Th from "../pages/examples/th";
import ThFo from "../pages/examples/four";
import ThFi from "../pages/examples/fifth";
import And from "../pages/logical/and";
import Nand from "../pages/logical/nand";
import Nor from "../pages/logical/nor";
import Not from "../pages/logical/not";
import Xor from "../pages/logical/xor";
import Yes from "../pages/logical/yes";
import Or from "../pages/logical/or";
import Kontakty from "../pages/Kontakty/Kont_cp";

export default function Home() {
  return (
    <div>
      <St />
      <Nd />
      <Th />
      <ThFo />
      <ThFi />
      <And />
      <Nand />
      <Or />
      <Nor />
      <Not />
      <Xor />
      <Yes />
      <Kontakty />
    </div>
  );
}
