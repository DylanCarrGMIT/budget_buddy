//Nav bar is displayed on top of every page to give user seemless navigation
//navbar design in index.css
import { Link } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Budget Buddy</h1>
            <div className="links">
                <Link to="/">Login/Register</Link>
                <Link to="/input">Input Spending</Link>
                <Link to="/charts">Charts</Link>
            </div>
        </nav>
     );
}
 
export default NavBar;