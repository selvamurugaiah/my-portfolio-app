import React from "react"
import foodzie from '../../img/foodzie.png';
import pettycash from '../../img/pettycash.png';
import bookmyshow from '../../img/bookmyshow.png';
import taskmanager from '../../img/TaskManager.png';
import urlshortner from '../../img/url-shortner.png';
import ProjectCard from "./ProjectCard";
import kidscity from "../../img/kids-city.png"
import './Project.css'


export default function ProjectDetails(){

  
    return(
        <div className="project-list" id="Projects">
            <div className="headers">
                <h1 style={{fontSize:"2rem"}}>Projects</h1>
            </div>
            <div className="project-details">
                <div className="first-set">

                <ProjectCard
              img={kidscity}
              title={"Kids-city"}
              content={"⭐Welcome to our Online Kids-Shop – your virtual haven for all things kids, right at your fingertips! "}
              frontend ={"https://github.com/selvamurugaiah/kid-city"}
              backend={"https://github.com/selvamurugaiah/kid-city-backend"}
              live ={"https://kids-world-store.netlify.app/"}
              ficon={"REACTJS | REACT-BOOTSTRAP | REACT-REDUX | SOCKET.IO | STRIPE | REACT-TOASTIFY | AXIOS | REDUX-THUNK | REDUX | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | DOTENV | VALIDATOR | CORS | STRIPE | CLOUDINARY | BCRYPT | MONGOOSE"}
              db={"MONGODB"}
              
            />

                <ProjectCard
              img={bookmyshow}
              title={"BookMyShow"}
              content={"⭐It is India’s largest entertainment ticketing platform. The website caters to ticket sales for movies, plays, concerts and sporting events via the online platform"}
              frontend ={"https://github.com/selvamurugaiah/bookmyshow-fe"}
              backend ={"https://github.com/selvamurugaiah/Hackathon2-backend"}
              live ={"https://selvamurugaiah-guvi-hackathon2-front.netlify.app/"}
              ficon={"REACTJS | REACT-BOOTSTRAP | MATERIAL UI | SWEETALERT | REACT-SCRIPTS | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | DOTENV | CORS | BCRYPT |"}
              db={"MONGODB"}
              />
                   
            <ProjectCard
              img={foodzie}
              title={"Foodzie-App"}
              content={"⭐A continental Recipe App, easy to make your favorite recipe on your own."}
              frontend ={"https://github.com/selvamurugaiah/Promise-Task/tree/main/Task-3"}
              live ={"https://super-cactus-60e568.netlify.app/"}
              ficon={"HTML | CSS | FETCH |"}
            />
             
               
            </div>
            <div className="second-set">
            <ProjectCard
              img={taskmanager}
              title={"Task-Manager"}
              content={"⭐Empower your productivity with our Task Manager App – streamline tasks, set priorities, and conquer your goals effortlessly "}
              frontend ={"https://github.com/selvamurugaiah/TaskManager-fe"}
              backend={"https://github.com/selvamurugaiah/Taskmanagement-be"}
              live ={"https://taskmanagement-app30.netlify.app/login"}
              ficon={"REACTJS | REACT-BOOTSTRAP | FORMIK | YUP | VITE | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | DOTENV | NODEMAILER | RAZORPAY | JWD | CRYPTO | BCRYPT | MONGOOSE"}
              db={"MONGODB"}
            />
            <ProjectCard
              img={pettycash}
              title={"pettyCash-Management"}
              content={"⭐Pettycash manager is a simple easy and most user friendly income/expence manager app. "}
              frontend ={"https://github.com/selvamurugaiah/pettycashmanager-Front"}
              backend={"https://github.com/selvamurugaiah/pettycash-backend"}
              live ={"	https://pettycash-manager.netlify.app/"}
              ficon={"REACTJS | REACT-DATEPICKER | AXIOS | STYLED-COMPONENTS | REACT-TOASTIFY | CHART.JS | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | DOTENV | NODEMAILER | VALIDATOR | JWD | COOKIE-PARSER | BCRYPT | MONGOOSE"}
              db={"MONGODB"}
            />
             
             <ProjectCard
              img={urlshortner}
              title={"URL-Shortner"}
              content={"⭐Simplify long web addresses with our URL shortener – share links easily and effectively. "}
              frontend ={" https://github.com/selvamurugaiah/Reset-password-and-url-shortner"}
              backend={"https://github.com/selvamurugaiah/url-shortner-task"}
              live ={"https://deploy-preview-1--super-youtiao-470e8c.netlify.app/"}
              ficon={"REACTJS | REACT-BOOTRAP | REACT-TOASTIFY | REACT-SCRIPT | REACT-ROUTER-DOM | "}
              bicon={"NODEJS | EXPRESS | SHORTID | EJS | NODEMON | MONGOOSE"}
              db={"MONGODB"}
            />
             

            </div>
        
            </div>
            
            </div>

            )}
          
