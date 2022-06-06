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
                        <p>I'm Trevor, a rising senior at Brown University pursuing a degree in Computer Science.</p>
                        <p>Through internships and personal and group projects, I've gained experience in full-stack development, UI/UX design, and product management. I primarily focus on front-end development and aim to create pixel-perfect web and mobile UI.</p>
                        <p>In my free time, I'm a captain for Brown's club baseball team, an advisor for multiple peer mentorship groups at Brown, an avid Spikeball player, a crossword lover, and a diehard Seattle sports fan.</p>
                        <p>Check out the rest of my website and feel free to connect with me via my socials in the bottom right corner of each page!</p>
                    </div>
                    
                </div>
            </div>
        );
    }
  }
  
export default AboutContainer;
  