import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Analytics from "./pages/Analytics";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import "./styles/global.css";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/analytics" element={<Analytics />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
