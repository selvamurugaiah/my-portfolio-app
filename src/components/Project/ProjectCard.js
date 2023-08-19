import React from "react";
import './Project.css'


export default function ProjectCard({img,title,content,frontend,backend,live}){
    return(
        <div className="projects">
            <div className="design-card">
              <img src={img} className="project-img"></img>
              <span className="project-title">{title}</span>
              <p>{content}</p>
              <a href={frontend} target="blank"> <button className="btn-p">FrondEnd</button></a>
              <a href={backend} target="blank"> <button className="btn-p">BackEnd</button></a>
              <a href={live} target="blank"> <button className="btn-p">Live</button></a>
            </div>
        </div>

    )
}