import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Nav from "../Nav";
import Courses from "./Courses";
import axios from "axios";
import { useEffect, useState } from "react";
import db from "./Database";

function Kanbas() {

   const [courses, setCourses] = useState([]);
   const [course, setCourse] = useState({
     name: "New Course",      number: "New Number",
     startDate: "2023-09-10", endDate: "2023-12-15",
   });

   const URL = "http://localhost:4000/api/courses";
   const findAllCourses = async () => {
     const response = await axios.get(URL);
     setCourses(response.data);
   };

   const addCourse = async () => {
      const response = await axios.post(URL, course);
      setCourses([
        response.data,
        ...courses,
      ]);
      setCourse({ name: "" });
    };

    const deleteCourse = async (course) => {
      const response = await axios.delete(
        `${URL}/${course._id}`
      );
      setCourses(courses.filter(
        (c) => c._id !== course._id));
    };  
  
   const updateCourse = () => {
     setCourses(
       courses.map((c) => {
         if (c._id === course._id) {
           return course;
         } else {
           return c;
         }
       })
     );
   };
   useEffect(() => {
      findAllCourses();
    }, []);
  

   return (
      <div>
         <Nav />

         <div className="d-flex">
            <div>
               <KanbasNavigation/>
            </div>
            <div>
            <Routes>
               <Route path="/" element={<Navigate to="Dashboard" />} />
               <Route path="Account" element={<h1>Account</h1>} />
               <Route path="Dashboard" element={
                  <Dashboard
                     courses={courses}
                     course={course}
                     setCourse={setCourse}
                     addNewCourse={addCourse}
                     deleteCourse={deleteCourse}
                     updateCourse={updateCourse}/>
               } />               
          
               <Route path="Courses/:courseId/*" element={<Courses/>} />
            </Routes>

            </div>
         </div>

      </div>
     
   );
 }
 export default Kanbas;