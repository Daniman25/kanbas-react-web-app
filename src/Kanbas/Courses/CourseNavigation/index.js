import { Link, useParams, useLocation } from "react-router-dom";
import './index.css';
function CourseNavigation() {
  const links = ["Home", "Modules", "Assignments", "Grades"];
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div style={{ width: 150 }}>
      <ul className="list-group wd-course-navigator">
      {links.map((link, index) => (
        <li>
          <Link
            key={index}
            to={`/Kanbas/Courses/${courseId}/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}>
            {link}
          </Link>
        </li>
      ))}
      </ul>
    </div>
  );
}

export default CourseNavigation;