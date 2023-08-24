import React from "react";
import './Project.css'


export default function ProjectCard({img,title,content,frontend,backend,live,ficon,bicon,db}){
    return(
        <div className="projects maincontainer">
            <div className="design-card thecard">
               <div className="thefront">
               <img src={img} className="project-img"></img>
              <span className="project-title">{title}</span>
              <p>{content}</p>
              <p className="backside">code links are backside let's hover it ➡️</p>
              
                </div> 

                <div className="theback">

                    <p className="project-title">{title}</p>
                    <h3>Tech Stack</h3>
                    <h4>FrontEnd:</h4>
                    <span className="tools">{ficon}</span>
                    <h4>BackEnd:</h4>
                    <span className="tools">{bicon}</span>
                    <h4>DataBase</h4>
                    <p className="tools">{db}</p>
                    <a href={frontend} target="_blank"> <button className="btn-p">FrondEnd</button></a>
                 <a href={backend} target="_blank"> <button className="btn-p">BackEnd</button></a>
                  <a href={live} target="_blank"> <button className="btn-p">Live</button></a>

                </div>
             
            </div>
        </div>

    )
}


