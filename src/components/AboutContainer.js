import React from 'react';
import profilePic from '../images/Website_Profile_Pic.png'

class AboutContainer extends React.Component {
    render () {
        return (
            <div className="aboutContainer">
                <div className="headlineContainer">
                    <h1>About Me</h1>
                </div>
                <div className="bioContainer">
                    <img id="profilePic" src={profilePic} alt={"profilePic"}/>
                    <div className="textContainer">
                        <h6>Hey!</h6>
                        <p>I'm Trevor, a sophomore at Brown University pursuing a degree in Computer Science.</p>
                        <p>Through internships, coursework, and self-teaching, I've gained experience in programming, UI design, web development, and social media marketing. I have a growing interest in front-end development and the broader intersection between technology and user interaction.</p>
                        <p>In my free time, I'm a captain for Brown's club baseball team, an avid Spikeball player, a crossword lover, and a diehard Seattle sports fan.</p>
                        <p>Check out the rest of my website and feel free to connect with me via my socials in the bottom right corner of each page!</p>
                    </div>
                    
                </div>
            </div>
        );
    }
  }
  
export default AboutContainer;
  