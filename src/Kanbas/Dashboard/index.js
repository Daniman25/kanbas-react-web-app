import { React, useState } from "react";
import { Link } from "react-router-dom";
import db from "../Database";
function Dashboard({ courses, course, setCourse, addCourse,
  deleteCourse, updateCourse }) {
  return (
    <div>
      <h1>Dashboard</h1>
      <h5>Course</h5>
      <input value={course.name} className="form-control"
             onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
      <button onClick={addCourse} >
        Add
      </button>
      
      <button onClick={updateCourse} >
        Update
      </button>

      <h1> Course List </h1>


      <div className="list-group">
        {courses.map((course) => (
          <Link key={course._id}
                to={`/Kanbas/Courses/${course._id}`}
                className="list-group-item">

            {course.name}
            
            <button
              onClick={(event) => {
                event.preventDefault();
                setCourse(course);
              }}>
              Edit
            </button>

            <button
              onClick={(event) => {
                event.preventDefault();
                deleteCourse(course._id);
              }}>
              Delete
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
