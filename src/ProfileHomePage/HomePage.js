import profile_pic from "../assest/profile_pic.jpeg";
import Footer from "./Footer";

function HomePage() {

    return (
      <div className="homepage">
        <div className="name"> 
    <h1 > Hi, I am <span>Bhagwati Nagarkoti </span> </h1>
          <p className="tagline">Front and back end developer </p>
          </div>

      <div className="picture">
        <img src={profile_pic} alt ="Profile Pic"
          style={{
            width : "30rem",
            height : "30rem"
          }}
        />
        </div>
        
        <div className="footer--HomePage">
          <Footer/>
</div>

            </div>
    );
}

export default HomePage;

