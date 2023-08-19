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
            />

                <ProjectCard
              img={bookmyshow}
              title={"BookMyShow"}
              content={"⭐It is India’s largest entertainment ticketing platform. The website caters to ticket sales for movies, plays, concerts and sporting events via the online platform"}
              frontend ={"https://github.com/selvamurugaiah/bookmyshow-fe"}
              backend ={"https://github.com/selvamurugaiah/Hackathon2-backend"}
              live ={"https://selvamurugaiah-guvi-hackathon2-front.netlify.app/"}/>
                   
            <ProjectCard
              img={foodzie}
              title={"Foodzie-App"}
              content={"⭐A continental Recipe App, easy to make your favorite recipe on your own."}
              frontend ={"https://github.com/selvamurugaiah/Promise-Task/tree/main/Task-3"}
              live ={"https://super-cactus-60e568.netlify.app/"}
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
            />
            <ProjectCard
              img={pettycash}
              title={"pettyCash-Management"}
              content={"⭐Pettycash manager is a simple easy and most user friendly income/expence manager app. "}
              frontend ={"https://github.com/selvamurugaiah/pettycashmanager-Front"}
              backend={"https://github.com/selvamurugaiah/pettycash-backend"}
              live ={"	https://pettycash-manager.netlify.app/"}
            />
             
             <ProjectCard
              img={urlshortner}
              title={"URL-Shortner"}
              content={"⭐Simplify long web addresses with our URL shortener – share links easily and effectively. "}
              frontend ={" https://github.com/selvamurugaiah/Reset-password-and-url-shortner"}
              backend={"https://github.com/selvamurugaiah/url-shortner-task"}
              live ={"https://deploy-preview-1--super-youtiao-470e8c.netlify.app/"}
            />
             

            </div>
        
            </div>
            
            </div>

            )}
           