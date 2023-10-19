import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./KanbasNavigation";
import Nav from "../Nav";
import Courses from "./Courses";

function Kanbas() {
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
               <Route path="Dashboard" element={<Dashboard />} />
               <Route path="Courses/:courseId/*" element={<Courses/>} />
            </Routes>

            </div>
         </div>

      </div>
     
   );
 }
 export default Kanbas;