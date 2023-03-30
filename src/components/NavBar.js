import { Link } from 'react-router-dom';
// import "./App.css";

function NavBar() {
    return (
        <nav className="nav" >
        <ul>
          <li><Link to="/">
           <div> Home Page</div>     
                </Link> </li> 
        <li>     
        <Link to="/aboutMe">
        <div> About Me</div>
        </Link> </li>
                
        <li> <Link to = "/contact" > 
        <div> Contact Me </div>
        </Link> </li>
    
        <li> <Link to = "/projects" >
        <div>Projects </div>
        </Link> </li>

        <li> < Link to = "/latestNews" >
        <div>LatestNews </div>
        </Link> </li>
        </ul>    
    </nav>
    
        )

}

export default NavBar;