import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Home from "@/pages/Home";
import Generator from "@/pages/Generator";
import Prompts from "@/pages/Prompts";
import Tools from "@/pages/Tools";
import About from "@/pages/About";

function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-[#050505] flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/generator" element={<Generator />} />
            <Route path="/prompts" element={<Prompts />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </HashRouter>
  );
}

export default App;