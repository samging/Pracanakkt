import Error from "./eror";
import Home from "./home";
import Projects from "./projects";
import Layout from "./layout";

import { Route, Routes, BrowserRouter } from "react-router-dom";

export default function NAV() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="homep" element={<Home />} />
          <Route path="projectp" element={<Projects />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
