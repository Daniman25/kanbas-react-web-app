import { Link } from "react-router-dom";
import db from "../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import Green from "../../Green.jpg";
import './index.css';
function Dashboard() {
  const courses = db.courses;
  return (
    <div>
      <h1>Dashboard</h1>
      <div class="d-flex flex-row flex-wrap">

        {courses.map((course) => (
          <div class="card" style={{"width": "260px"}}>
            <img src={Green} class="card-img-top" alt="..."></img>
            <div className="card-body">
              <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
                {course.number} {course.name}
              </Link>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
}
export default Dashboard;

/*  Card template
    <div class="card" style="width: 260px;">
      <img src="Green.jpg"
            class="card-img-top" alt="...">
      <div class="card-body">
          <h5 class="card-title">Algebra 1000</h5>
          <p class="card-text">
              Introduction to Algerba</p>
      </div>
  </div>
*/

/*
        {courses.map((course) => (
          <Link key={course._id} to={`/Kanbas/Courses/${course._id}`} className="list-group-item">
            {course.name}
          </Link>
        ))}
*/

