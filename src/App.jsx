import { HashRouter, Routes, Route } from "react-router-dom";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import Home from "./pages/home/Home.jsx";
// import Gallery from "./pages/Gallery/Gallery";
// import About from "./pages/About/About";

function App() {
  return (
    <HashRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/SomethingFromEnzo/gallery" element={<Gallery />} />
        <Route path="/SomethingFromEnzo/about" element={<About />} /> */}
      </Routes>
      {/* <Footer /> */}
    </HashRouter>
  );
}

export default App;
