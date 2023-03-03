import { Outlet, Link } from "react-router-dom";
import "./navstyle.css";

const Layout = () => {
  return (
    <>
      <nav>
        <button>
          <Link to="/">Home</Link>
        </button>
        <button>
          <Link to="/projectp">Projects</Link>
        </button>
      </nav>

      <Outlet />
    </>
  );
};

export default Layout;
