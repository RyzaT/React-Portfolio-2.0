import   './index.scss';
import { Link } from 'react-router-dom';
import cartoon from 'react-portfolio/src/assets/cartoon.jpg';
import cartoon2 from 'react-portfolio/src/assets/cartoon.jpg';

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='cartoon' to='/'>
            <img src={cartoon} alt="logo" />
            <img className='sketch' src={cartoon2} alt="logo2" />
        </Link>
        <nav>
            <NavLink exact="true" activeClassName="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true"
            activeClassName="active" 
            className="about-link" 
            to="/about">
                <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
            </NavLink>
            <NavLink 
            exact="true" 
            activeClassName="active" 
            className="contact-link"
            to="/contact">
                <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
            </NavLink>
        </nav>
    </div>
)

export default Sidebar;