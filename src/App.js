import AboutMe from "./ProfileHomePage/AboutMe";
// import Footer from "./ProfileHomePage/Footer";
import { Routes, Route } from "react-router-dom";
import ContactMe from "./ProfileHomePage/ContactMe";
import Projects from "./ProfileHomePage/Projects";
import LatestNews from "./ProfileHomePage/LatestNews";
import NavBar from "./components/NavBar";
import HomePage from "./ProfileHomePage/HomePage";

import "./App.css";




function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/aboutMe" element={<AboutMe />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/latestNews" element={<LatestNews/>} />
      </Routes>
      
    

      {/* <Footer /> */}
    </div>
  );
}

export default App;
