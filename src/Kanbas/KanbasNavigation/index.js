import { Link, useLocation } from "react-router-dom";
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser } from 'react-icons/fa';
import { FaTachometerAlt } from 'react-icons/fa';
import { FaBook } from 'react-icons/fa';
import { FaCalendar } from 'react-icons/fa';
function KanbasNavigation() {
  const links = [{ Page : "Account", Image : FaUser},
                 { Page : "Dashboard", Image : FaTachometerAlt},
                 { Page : "Courses",  Image  : FaBook},
                 { Page : "Calendar", Image : FaCalendar}];
  const { pathname } = useLocation(); //look at example 
  return (
    //Can change space between kanbasnav and content here
    <div style={{ width: 150 }}>
        <ul className="list-group wd-kanbas-navigator">
            {links.map((link, index) => (
                <li className={`list-group-item ${links.Page === "Account" ? "Account" : "" }`}>
                    <link.Image />
                    <Link to={`/Kanbas/${link.Page}`}> 
                    {link.Page}
                    </Link>
                </li>

            ))}       

        </ul>

    </div>
  );
}
export default KanbasNavigation;