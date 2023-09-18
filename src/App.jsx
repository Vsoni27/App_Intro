import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
// import About from "./pages/About";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/about" element={<About />} /> */}
      </Routes>
      <Contact />
    </div>
  );
}

export default App;
