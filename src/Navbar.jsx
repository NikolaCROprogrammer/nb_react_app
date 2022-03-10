import {Link} from 'react-router-dom';

function Navbar(){
    return(   
  <ul> 
    <li class="nav_li"> <Link to="/">Home</Link>  </li>
    <li class="nav_li"> <Link to="/About">About</Link>  </li>
  </ul> 
    );
}

export default Navbar;