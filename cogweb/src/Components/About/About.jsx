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
                        <h5> Producer, Audio, Programmer </h5>
                        Dave is the Producer of COG Studios Inc. Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie litora pretium amet senectus non. Faucibus fames maecenas leo pulvinar a hendrerit. Penatibus habitant dignissim bibendum molestie, dolor mauris interdum cras. Integer imperdiet pharetra posuere placerat posuere, leo fringilla massa. Orci efficitur volutpat montes consectetur consequat at. Hac iaculis pellentesque netus commodo tempor curae. Nibh cubilia interdum curae semper ipsum dapibus.

                        </div>
        
                        <img className="profile-image" src={dave} alt="dave"></img>
                        
        
                </div>
        
                <div className="teammembersection">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Shasta Johnsen-Sollos</h4>
                        <h5> Assistant Producer, Systems Programmer </h5>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie litora pretium amet senectus non. Faucibus fames maecenas leo pulvinar a hendrerit. Penatibus habitant dignissim bibendum molestie, dolor mauris interdum cras. Integer imperdiet pharetra posuere placerat posuere, leo fringilla massa. Orci efficitur volutpat montes consectetur consequat at. Hac iaculis pellentesque netus commodo tempor curae. Nibh cubilia interdum curae semper ipsum dapibus.
                        </div>
        
                        <img className="profile-image" src={shasta} alt="shasta"></img>
                        
        
                </div>
        
                <div className="teammembersectionreverse">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Ganesh Saraswat</h4>
                        <h5> Programmer </h5>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie litora pretium amet senectus non. Faucibus fames maecenas leo pulvinar a hendrerit. Penatibus habitant dignissim bibendum molestie, dolor mauris interdum cras. Integer imperdiet pharetra posuere placerat posuere, leo fringilla massa. Orci efficitur volutpat montes consectetur consequat at. Hac iaculis pellentesque netus commodo tempor curae. Nibh cubilia interdum curae semper ipsum dapibus.
                        </div>
        
                        <img className="profile-image" src={gan} alt="gan"></img>
                        
        
                </div>
        
                <div className="teammembersection">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Zoe Snyder</h4>
                        <h5> Artist, Narrative Designer </h5>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie litora pretium amet senectus non. Faucibus fames maecenas leo pulvinar a hendrerit. Penatibus habitant dignissim bibendum molestie, dolor mauris interdum cras. Integer imperdiet pharetra posuere placerat posuere, leo fringilla massa. Orci efficitur volutpat montes consectetur consequat at. Hac iaculis pellentesque netus commodo tempor curae. Nibh cubilia interdum curae semper ipsum dapibus.
                        </div>
        
                        <img className="profile-image" src={zoe} alt="zoe"></img>
                        
        
                </div>
        
                <div className="teammembersectionreverse">
                        
                        <div className="teammembertitleanddescription">
                        <h4>Samuel Anderson</h4>
                        <h5> 3D Artist </h5>
                        Lorem ipsum odor amet, consectetuer adipiscing elit. Molestie litora pretium amet senectus non. Faucibus fames maecenas leo pulvinar a hendrerit. Penatibus habitant dignissim bibendum molestie, dolor mauris interdum cras. Integer imperdiet pharetra posuere placerat posuere, leo fringilla massa. Orci efficitur volutpat montes consectetur consequat at. Hac iaculis pellentesque netus commodo tempor curae. Nibh cubilia interdum curae semper ipsum dapibus.
                        </div>
        
                        <img className="profile-image" src={sam} alt="sam"></img>
                
        
                </div>
            </div>
        </div>
        )
        }

export default About
