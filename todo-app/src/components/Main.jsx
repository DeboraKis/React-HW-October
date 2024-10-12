import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import List from "./pages/List";
import About from "./pages/About";
const Main = () => {
  return (
    <>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/list" element={<List />}></Route>
          <Route path="/about" element={<About />}></Route>
        </Routes>
      </main>
    </>
  );
};

export default Main;
