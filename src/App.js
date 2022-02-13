import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages'
import Contact from './pages/contact'

export default function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/contact" element={<Contact/>} exact />
      </Routes>
    </Router>
    </>
  );
}


