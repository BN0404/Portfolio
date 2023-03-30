import profile_pic from "../assest/profile_pic.jpeg";


function HomePage() {

    return (
      <div>
        <div className="name"> 
    <h1 > Hi, I am <span>Bhagwati Nagarkoti </span> </h1>
          <p className="tagline">Front and back end developer </p>
          </div>

      <div className="picture">
        <img src={profile_pic}
          style={{
            width : "30rem",
            height : "30rem"
          }}
        />
            </div>
            </div>
    );
}

export default HomePage;

