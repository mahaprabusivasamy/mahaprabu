import { Link } from 'react-router-dom';
import "./Head.css";
import img from "../../assets/logo.jpg";
import IconsRow from '../Others/IconsRow';

function Header() {
 
    return (
     
            <div className="main">
                <div className="nav">
                    <div className="img">
                        <img src={img} alt="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><Link className="li" to="/" >Home</Link></li>
                            <li><Link className="li" to="/About" >About</Link></li>
                            <li><Link className="li" to="/Projects" >Projects</Link></li>
                            <li><Link className="li" to="/Contact" >Contact</Link></li>
                        </ul>
                    </div>
                    <IconsRow/>
                </div>
                
            </div>
       
    );
}

export default Header;
