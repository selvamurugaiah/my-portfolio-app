import React from "react";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import './Intro.css'
import robot from '../../img/robot.png';
import Crown from '../../img/crown.png';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from '../../context';
import {useContext} from 'react'



  const Intro =()=>{
      
    const transition = {duration:2, type:'spring'}
     
    const theme = useContext(themeContext)
    const darkMode =theme.state.darkMode;

    const component = document.querySelectorAll(".intro-cont")

    const observered = new IntersectionObserver(entries=>{
      entries.forEach(entry =>{
        if(entry.isIntersecting){
            console.log(entry)
            entry.target.classList.add('show')
        }else{
            entry. target.classList.remove('show')
        }
       
      })
    } )
     
    component.forEach(component=>{
        observered.observe(component)
    })
   
    return(
        <div className="intro" id="Navbar">
        <div className="i-left">
             
            <div className="i-name">
                <span style={{color:darkMode?'white':'white'}} >Hi all, I'm </span>
                <span>Selvam</span>
                <div className="role">
                    <span className="text">
                        {" "}
                        <h1 >
                         Full Stack Developer-MERN
                        </h1>
                        </span>
                        </div>
                        <span  className="description">
                        A Mechanical Engineer turned Web Developer, 
                        Passionate towards new creation and keeping myself up to Date on techs
                        </span>
                     <br/>
                    <div className="colz-icons">
                       
                    <a href="https://github.com/selvamurugaiah"target="_blank" ><AiFillGithub/></a>
                    <a href="https://www.linkedin.com/in/selvam-m-434676258/" target="_blank" ><BsLinkedin/></a>
                    <a href="https://mail.google.com/mail/u/0/?hl=en-GB&tf=cm&fs=1&to=selvamurugaiah100@gmail.com" target="_blank" ><AiOutlineMail/></a>
                    </div>
                  
            </div>
         
            <a href='selva.pdf' target="_blank" download='selva.pdf'>
                        
                        <button className="button">Get Resume</button>
                        </a>
        </div>
        
      
        <div className="i-right intro-cont">
          
           <img src={robot} alt="" className="robot "/>
           <div style={{top:'-4%',left:'68%'}} id="i-card">
            <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </div>
            {/*blur
            <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
            <div className="blur" style={{
                background:"yellow",
                top:'17rem',
                width:'21rem',
                height:'11rem',
                left:'-9rem'
        
        }}>

            </div>
    */}
        </div>
        </div>
    )
}
export default Intro