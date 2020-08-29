import React from 'react';
import StackedItem from './StackedItem';
import microsoftLogo from '../images/microsoft.png'
import fsabLogo from '../images/fsab.png'
import cs15Logo from '../images/cs15.png'
import cs16Logo from '../images/cs16.png'

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

const graphText = [
    "A graph data structure implementation with an accompanied by a visualizer. The graph was built using an adjacency matrix as its underlying structure. We were also asked to implement the Prim-Jarnik algorithm for finding minimum spanning forests (MSFs) and the PageRank algorithm used by Google Search to rank web pages in their search results.",
    null,
    "Languages: Java",
    "Video Demo",
    "April 2020",
    "https://drive.google.com/file/d/1FKsAhlMrataoE59GdgOzjmWNne9cGN33/view?usp=sharing"
]

const seamcarveText = [
    "An implementation of the seam carving algorithm used for image resizing. This algorithm is a common example of the optimization power of dynamic programming. We were asked to incorporate this algorithm using this dynamic programming approach and then test the accuracy of our algorithm on a set of example photos.",
    null,
    "Languages: Java",
    "Video Demo",
    "February 2020",
    "https://drive.google.com/file/d/1aN6apgRh_xQGiIS6b46s5nFYHEiNqW0E/view?usp=sharing"
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
                    <StackedItem title={"Voice-Powered Figma - Microsoft Hackathon 2020"} isExperiencePage={false} logo={microsoftLogo} descriptionText={hackathonText}/>
                    <StackedItem title={"Chinese Students Association Website - Full Stack at Brown"} isExperiencePage={false} logo={fsabLogo} descriptionText={csaText}/>
                    <StackedItem title={"Graph - CSCI 0160: Algorithms and Data Structures"} isExperiencePage={false} logo={cs16Logo} descriptionText={graphText}/>
                    <StackedItem title={"Seamcarve - CSCI 0160: Algorithms and Data Structures"} isExperiencePage={false} logo={cs16Logo} descriptionText={seamcarveText}/>
                    <StackedItem title={"Sketchy - CSCI 0150: Object-Oriented Programming"} isExperiencePage={false} logo={cs15Logo} descriptionText={sketchyText}/>
                </div>
            </div>
        );
    }
  }
  
export default ProjectsContainer;
  