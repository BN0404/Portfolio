import AboutMe from "./ProfileHomePage/AboutMe";
import Footer from "./ProfileHomePage/Footer";
import { Routes, Route } from "react-router-dom";
import ContactMe from "./ProfileHomePage/ContactMe";
import Projects from "./ProfileHomePage/Projects";
import LatestNews from "./ProfileHomePage/LatestNews";
import NavBar from "./components/NavBar";
import profile_pic from "./assest/profile_pic.jpeg";
import "./App.css";



function App() {
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/"  />
        <Route path="/aboutMe" element={<AboutMe />} />

        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/latestNews" element={<LatestNews/>} />
      </Routes>
      <h1>
        Hi, I am <span>Bhagwati Nagarkoti </span>
      </h1>
      <p className="tagline">Front and back end developer</p>

      <div className="picture">
        <img src={profile_pic}
          style={{
            width : "30rem",
            height : "30rem"
          }}
        />
      </div>

      <Footer />
    </div>
  );
}

export default App;
