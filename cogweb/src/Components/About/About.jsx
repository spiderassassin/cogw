import React from 'react'
import './About.css'
import enemy from '../../assets/enemy_icon.png'
import dave from '../../assets/Dave.png'
import shasta from '../../assets/Shasta.png'
import sam from '../../assets/Sam.png'
import gan from '../../assets/Gan.jpeg'
import zoe from '../../assets/Zoe.jpeg'
const About = () => {
        return (
        <div className='aboutsection'> 
        <br></br><br></br>       
                <div className="sectionheader">
                
                <h1 className="sectiontitle">Our Story</h1>
                </div>
                <div className="sectioncontent">
                <div className="contentwithimage">
                COG Studios was formed as part of the capstone class for the University of Alberta's game
                development certificate in 2024.
                They're a passionate team of friends who incorperated after the class ended and released their game, Infernal Bloodrush.
                They are recently recieved funding to work on a new game, and are hard at work.

                <img className="image" src={enemy} alt="enemy"></img>
                </div>
                </div>
                <div className="sectionheader"><h1 className="sectiontitle">Our Team</h1> </div>
                <br></br><br></br><br></br>
                <div className="sectioncontent">
                <div className="teammembersectionreverse">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Dave Goel</h4>
                        <h5> Producer, Audio, Gameplay Programmer </h5>
                        Two things that Dave is passionate about is Kinect Sports and Plants vs Zombies.  In addition to being a game developer, 
                        Dave is also an AI Games researcher, currently pursuing a Masters degree in Computing Science, having a publication at 
                        the Artificial Intelligence and Interactive Digital Entertainment. 
                        When not busy with work, he likes to brush up on his guitar skills.
                        </div>
        
                        <img className="profile-image" src={dave} alt="dave"></img>
                        
        
                </div>
        
                <div className="teammembersection">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Shasta Johnsen-Sollos</h4>
                        <h5> Assistant Producer, Systems Programmer </h5>
                        Good at programming.
                        </div>
        
                        <img className="profile-image" src={shasta} alt="shasta"></img>
                        
        
                </div>
        
                <div className="teammembersectionreverse">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Ganesh Saraswat</h4>
                        <h5> Lead Programmer </h5>
                        Ganesh has a decade of experience programming experience using C#, C++, and Java. He has developed an open-source full body tracking plugin for Unity and has collaborated with a variety of teams ranging from student groups in Europe to an AR development team in China to help to integrate the plugin into their game projects.
                        </div>
        
                        <img className="profile-image" src={gan} alt="gan"></img>
                        
        
                </div>
        
                <div className="teammembersection">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Zoe Snyder</h4>
                        <h5> 2D Artist, Narrative Designer </h5>
                        Can Draw.
                        </div>
        
                        <img className="profile-image" src={zoe} alt="zoe"></img>
                        
        
                </div>
        
                <div className="teammembersectionreverse">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Samuel Anderson</h4>
                        <h5> 3D Artist </h5>
                        He blends sometimes.
                        </div>
        
                        <img className="profile-image" src={sam} alt="sam"></img>
                
        
                </div>
            </div>
        </div>
        )
        }

export default About
