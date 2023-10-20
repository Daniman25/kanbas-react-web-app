import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import { FaEllipsisV } from 'react-icons/fa';



function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <ul className="list-group wd-modules">
      {
       modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <li key={index} className="list-group-item list-group-item-Dark">
             <h4>
              <FaEllipsisV/>
              <FaEllipsisV/>
              {module.name}
             </h4>
             <p>{module.description}</p>
           </li>
      ))
      }
    </ul>
  );
}
export default ModuleList;


//Modules by week:

/*
<li class="list-group-item list-group-item-Dark">
    <h4> 
        <i class="fa fa-ellipsis-v"></i>
        <i class="fa fa-ellipsis-v"></i>
        WEEK 0 - INTRO
    </h4>
    <ul class="list-group">
        <li class="list-group-item list-group-item-light">
            <span>
                <i class="fa fa-ellipsis-v"></i>
                <i class="fa fa-ellipsis-v"></i>
                LEARNING OBJECTIVES
            </span>
            <ul>
                <li>
                    <i class="fa fa-ellipsis-v wd-float-left"></i>
                    <i class="fa fa-ellipsis-v"></i>
                    Introduction to the course</li>
                <li>Learning what is Web Development</li>
                <li>Creating a development environment</li>
                <li>Creating a Web Application</li>
                <li>Getting started with the 1st assignment</li>
            </ul>
        </li>
        <li class="list-group-item list-group-item-light">
            READING
            <ul>
                <li>Full Stack Developer - Chapter 1 - Introduction</li>
                <li>Full Stack Developer - Chapter 2 - Creating User Interfaces With HTML</li>
            </ul>
        </li>
        <li class="list-group-item list-group-item-light">
            SLIDES
            <li class="list-group-item list-group-item-light">
                <a href="#">Introduction to the Web Development Links to an external site</a>
            </li>
            <li class="list-group-item list-group-item-light">
                <a href="#">Creating an HTTP server with Node.js Links to an external site</a>
            </li>
            <li class="list-group-item list-group-item-light">
                <a href="#">Creating a React Application Links to an external site</a>
            </li>
        </li>
    </ul>
</li>
*/

