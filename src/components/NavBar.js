import { Link, NavLink } from 'react-router-dom';
// import "./App.css";

import {
    Container, Navbar, Nav
} from 'react-bootstrap';
import Projects from '../ProfileHomePage/Projects';

function NavBar() {

    const navData = [
        // {
        //     path: "/",
        //     name:"Home"
        // },

        {
            path: "/aboutMe",
            name: "About Me"
        },

        {
            path: "/projects",
            name: "Projects"
        },

        {
            path: "/latestNews",
            name: "Latest News"
        },
        {
            path: "/contact",
            name: "Contact Me"
        }
        
    ]



    return (
        // <Navbar className='navbar' >
        // <Container>
        //         <Navbar.Brand href="/" className='home'> HomePage</Navbar.Brand>
        //         <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //         <Navbar.Collapse id="basic-navbar-nav">
        //             <Nav className="ms-auto">
                        
        //                 {
        //                     navData.map((data) => (
        //                         <NavLink to={data.path} key={data.name}>
        //                             <div className='navList'>{data.name}</div>
        //                         </NavLink>
        //                     ))
        //                 }
        //             </Nav>
        //         </Navbar.Collapse>
        //     </Container>
        //     </Navbar>



        <nav className="nav" >
        <ul>
          <li><Link to="/" >
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