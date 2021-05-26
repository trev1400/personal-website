import React from 'react';
import StackedItem from './StackedItem';
import microsoftLogo from '../images/microsoft.png'
import fsabLogo from '../images/fsab.png'
import auxplosionLogo from '../images/auxplosion.png'
import mootualLogo from '../images/mootual.png'
import mapDashLogo from '../images/mapdash.png'

const hackathonText = [
    "Microsoft's annual Hackathon is the largest private global hackathon. This project was an accessibility plugin for Figma, a popular interface design tool. It uses LUIS, a Microsoft Natural Language Processing service, to translate voice commands into Figma actions so that users with limited mouse and keyboard mobility can still utilize this tool. The team had 15 members and was a mix of accessibility designers, program managers, software engineers, and interns.",
    "Implemented the front-end UI for the plugin itself. This involved creating a dropdown list to display all valid voice commands, incorporating icon animations for listening states, and adding text prompts for error states.",
    "Tech Stack: TypeScript, HTML, CSS",
    "Video Demo",
    "July 2020",
    "https://drive.google.com/file/d/1P_U4EnYG5_AlJKNaanj2VqrWbKUWdhcg/view?usp=sharing"
]

const csaText = [
    "Brown's Chinese Students Association was looking for a static website to expand their outreach efforts to both new and current members. Full Stack at Brown took on this project and delegated it to our team of three.",
    "Worked in a team with two other FSAB members to complete this website. Created the Home and About pages as well as various other interactive elements around the website. Focused on improving Vanilla JavaScript skills.",
    "Tech Stack: HTML, CSS, JavaScript",
    "Video Tour",
    "May 2020 - July 2020",
    "https://drive.google.com/file/d/11D5sErNCRoFRXzExuXNbohUyvVFM98uN/view?usp=sharing"
]

const auxplosionText = [
    "A song recommendation generator that uses Spotify's API to suggest songs based on a 'seed track' provided by the user. Developed with a React front-end and a very basic Express back-end. I took on this side project to practice working with APIs and continue learning React.",
    null,
    "Tech Stack: ReactJS, Node.js, Express",
    "Website",
    "December 2020",
    "https://auxplosion.herokuapp.com/"
]

const mootualText = [
    "Worked in a team of four to build Mootual for UChicago’s Radical Innovation for Social Change Lab (RISC). Mootual is a React Native app that allows users to request and recommend mutual friends to each other.",
    "Led the frontend UI development as well as the build deployment via TestFlight. The app is currently undergoing beta testing with UChicago students and faculty.",
    "Tech Stack: ReactNative (Expo), Postgres, Node.js, Sequelize",
    "Video Demo",
    "January 2021 - May 2021",
    "https://drive.google.com/file/d/18NTVZSoMoYI0mp_Fsxva-R-kavbTf-H-/view?usp=sharing"
]

const mapDashText = [
    "Final group project for CS 32: Software Engineering. Created a multiplayer Google StreetView-based game in which two users are given the same destination and tasked with racing to that destination in the StreetView.",
    "Built the UI for the main gameplay screen and interfaced ReactJS frontend with Java backend web sockets. Wrote JUnit test suite using Mockito to simulate web socket connections to the backend.",
    "Tech Stack: ReactJS, Node.js, Java, Java WebSocket API, SQL/SQLite",
    "Video Demo",
    "March 2021 - April 2021",
    "https://drive.google.com/file/d/1Uqhi2Ux_Un7NRB0TY737W9Ys5aN4GpB7/view?usp=sharing"
]

class ProjectsContainer extends React.Component {
    render () {
        return (
            <div className="projectsContainer">
                <div className="headlineContainer">
                    <h1>Projects</h1>
                </div>
                <div className="stackedListContainer">
                    <StackedItem title={"Mootual - Full Stack at Brown"} isExperiencePage={false} logo={mootualLogo} descriptionText={mootualText}/>
                    <StackedItem title={"AUXplosion - Personal Project"} isExperiencePage={false} logo={auxplosionLogo} descriptionText={auxplosionText}/>
                    <StackedItem title={"MapDash - CSCI 0320: Software Engineering"} isExperiencePage={false} logo={mapDashLogo} descriptionText={mapDashText}/>
                    <StackedItem title={"Voice-Powered Figma - Microsoft Hackathon 2020"} isExperiencePage={false} logo={microsoftLogo} descriptionText={hackathonText}/>
                    <StackedItem title={"Chinese Students Association Website - Full Stack at Brown"} isExperiencePage={false} logo={fsabLogo} descriptionText={csaText}/>
                </div>
            </div>
        );
    }
  }
  
export default ProjectsContainer;
  