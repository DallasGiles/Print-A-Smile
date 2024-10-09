import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
        </ul>
    </nav>
);

//reusable header here change components here to change on 
//all pages that use header component!

export default Navbar;