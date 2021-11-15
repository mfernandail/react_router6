import { BrowserRouter } from "react-router-dom";
import { Routes, Route, Link } from "react-router-dom";
import { About } from "../components/about";
import Contact from "../components/contact";
import Home from "../components/home";
import Nav from "../components/nav";

export const Routers = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Home />} />
      </Routes>                  
    </BrowserRouter>
  )
}
