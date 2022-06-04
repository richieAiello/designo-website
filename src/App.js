import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./routes/Home";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Locations from "./routes/Locations";
import AppDesign from "./routes/AppDesign";
import GraphicDesign from "./routes/GraphicDesign";
import WebDesign from "./routes/WebDesign";

export default function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/locations" element={<Locations />}/>
          <Route path="/app-design" element={<AppDesign />}/>
          <Route path="/graphic-design" element={<GraphicDesign />}/>
          <Route path="/web-design" element={<WebDesign />}/>
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};