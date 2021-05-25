import React from 'react';
import StackedItem from './StackedItem';
import microsoftLogo from '../images/microsoft.png'
import fsabLogo from '../images/fsab.png'
import cs15Logo from '../images/cs15.png'
import cs16Logo from '../images/cs16.png'
import tronLogo from '../images/tron.png'
import auxplosionLogo from '../images/auxplosion.png'

const hackathonText = [
    "Microsoft's annual Hackathon is the largest private global hackathon. This project was an accessibility plugin for Figma, a popular interface design tool. It uses LUIS, a Microsoft Natural Language Processing service, to translate voice commands into Figma actions so that users with limited mouse and keyboard mobility can still utilize this tool. The team had 15 members and was a mix of accessibility designers, program managers, software engineers, and interns.",
    "Implemented the front-end UI for the plugin itself. This involved creating a dropdown list to display all valid voice commands, incorporating icon animations for listening states, and adding text prompts for error states.",
    "Languages: TypeScript, HTML, CSS",
    "Video Demo",
    "July 2020",
    "https://drive.google.com/file/d/1P_U4EnYG5_AlJKNaanj2VqrWbKUWdhcg/view?usp=sharing"
]

const csaText = [
    "Brown's Chinese Students Association was looking for a static website to expand their outreach efforts to both new and current members. Full Stack at Brown took on this project and delegated it to our team of three.",
    "Worked in a team with two other FSAB members to complete this website. Created the Home and About pages as well as various other interactive elements around the website. Focused on improving Vanilla JavaScript skills.",
    "Languages: HTML, CSS, JavaScript",
    "Website",
    "May 2020 - July 2020",
    null
]

const auxplosionText = [
    "A song recommendation generator that uses Spotify's API to suggest songs based on a 'seed track' provided by the user. Developed with a React front-end and a very basic Express back-end. I took on this side project to practice working with APIs and continue learning React.",
    null,
    "Languages: React, HTML, CSS",
    "Website",
    "December 2020",
    "https://auxplosion.herokuapp.com/"
]

const tronText = [
    "A Tron bot developed as a partner project that uses the minimax algorithm optimized with αβ-pruning to be able to explore a greater number of game states. The bot uses an evaluation function based around the Voronoi heuristic, which helps it estimate how much space on the game board it controls in relation to its opponent.",
    null,
    "Languages: Python",
    "Video Demo",
    "December 2020",
    "https://drive.google.com/file/d/1zA7CbWnOoGL8CD51q8A1x3l_N_6wJWXb/view?usp=sharing"
]

const sketchyText = [
    "Sketchy is a simple graphics editing program implemented using JavaFX's graphics packages. We were first tasked with creating a user interface to serve as a canvas for all of the graphical actions. The next step was to implement different graphical actions such as creating and manipulating shapes, drawing with the mouse, and undoing and redoing. Finally, we were asked to implement saving and loading functionality using Java's File I/O package.",
    null,
    "Languages: Java, JavaFX",
    "Video Demo",
    "November 2020 - December 2020",
    "https://drive.google.com/file/d/1tKfWOj3HAdrjB3INfUNFt_2p-7fHwLUV/view?usp=sharing"
]

class ProjectsContainer extends React.Component {
    render () {
        return (
            <div className="projectsContainer">
                <div className="headlineContainer">
                    <h1>Projects</h1>
                </div>
                <div className="stackedListContainer">
                    <StackedItem title={"AUXplosion"} isExperiencePage={false} logo={auxplosionLogo} descriptionText={auxplosionText}/>
                    <StackedItem title={"Voice-Powered Figma - Microsoft Hackathon 2020"} isExperiencePage={false} logo={microsoftLogo} descriptionText={hackathonText}/>
                    <StackedItem title={"Chinese Students Association Website - Full Stack at Brown"} isExperiencePage={false} logo={fsabLogo} descriptionText={csaText}/>
                    <StackedItem title={"Tron - CSCI 1410: Artificial Intelligence"} isExperiencePage={false} logo={tronLogo} descriptionText={tronText}/>
                    <StackedItem title={"Sketchy - CSCI 0150: Object-Oriented Programming"} isExperiencePage={false} logo={cs15Logo} descriptionText={sketchyText}/>
                </div>
            </div>
        );
    }
  }
  
export default ProjectsContainer;
  