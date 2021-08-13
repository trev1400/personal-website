import React from 'react';
import StackedItem from './StackedItem';
import microsoftLogo from '../images/microsoft.png'
import fsabLogo from '../images/fsab.png'
import scorebookLogo from '../images/scorebook.png'

const sweText = [
    "- Built the home screen UI for an Office web app experience in a React/TypeScript stack by developing custom React components and leveraging Microsoft Fluent UI controls.",
    "- Integrated home screen UI with back-end APIs and data stores to implement features and user functionalities.",
    "- Created a Jest and React Testing Library-based test suite for the UI that increased code coverage by 80%.",
    null,
    "May 2021 - August 2021",
    null
]

const explorerText = [
    "Microsoft's Explore Program is a 12-week internship that allows you to try both the Program Manager and Software Engineer roles.",
    "- Program Management Phase: Identified pain points with Office’s in-app learning experience; Created a high-fidelity project prototype in Figma; Conducted two user testing sessions and utilized insights to iterate on design.",
    "- Engineering Phase: Programmed in C++ and Microsoft’s XML-based markup language to build the front-end UI and back-end framework for a new Office in-app learning experience; Built pop-up dialog UI for a voice-powered Figma plugin as part of a Microsoft Hackathon team; Collaborated daily with two intern teammates during both phases.",
    null,
    "May 2020 - August 2020",
    null
]

const fsabText = [
    "Full Stack at Brown is a Brown University club committed to promoting the education of full stack software engineering by working on applications for the Brown community and beyond.",
    "Worked in a team of four to create Mootual for UChicago’s Radical Innovation for Social Change Lab (RISC). Mootual is a mobile app that allows users to request and recommend mutual friends to each other. Also worked in a team of three to create a website for Brown’s Chinese Student Association. Focused on becoming proficient in Vanilla JavaScript while improving upon existing HTML and CSS skills.",
    null,
    "Website",
    "February 2020 - Present",
    "https://www.fullstackatbrown.com/"
]

const graphicDesignText = [
    "SBLive Sports is a sports media and technology company that serves the high school sports market with innovative software products and media services.",
    "Designed logos for “Bracketology” feature on high school basketball tournament coverage. Created custom social media templates for coach quotes and team rankings posts.",
    "Made cover images for various high school football articles on SBLive Washington and SBLive Mississippi websites.",
    "Work Examples",
    "January 2019 - Present",
    "https://drive.google.com/drive/folders/12H_mWYQFkxKYcduv7PZyMYEUCc-khUYH?usp=sharing"
]

const highschoolText = [
    "Microsoft's High School Program is a 10-week internship for high school students from the Greater Seattle area who have a demonstrated interest in technology.",
    "First summer in program, worked on Minecraft: Education Edition Marketing Team. Produced marketing material, social media posts, and texture pack graphic design. Conducted competitive analysis of 11 learn-to-code programs to assist Minecraft’s market research.", 
    "Second summer in program, worked on Minecraft Design Team. Designed pixel art icons, avatar skins, and logos for two intern team minigames. Created custom start screen user interfaces and implemented art assets into minigames using Minecraft’s JSON-based resource packs.",
    null,
    "June 2018 - August 2018 | June 2019 - August 2019",
    null
]

class ExperienceContainer extends React.Component {
    render () {
        return (
            <div className="experienceContainer">
                <div className="headlineContainer">
                    <h1>Experience</h1>
                </div>
                <div className="stackedListContainer">
                    <StackedItem title={"Software Engineer Intern - Microsoft Fluid Framework"} isExperiencePage={true} logo={microsoftLogo} descriptionText={sweText}/>
                    <StackedItem title={"Explorer Intern - Microsoft Office Core Experiences"} isExperiencePage={true} logo={microsoftLogo} descriptionText={explorerText}/>
                    <StackedItem title={"Frontend Engineer - Full Stack at Brown"} isExperiencePage={true} logo={fsabLogo} descriptionText={fsabText}/>
                    <StackedItem title={"Freelance Graphic Design - Scorebook Live"} isExperiencePage={true} logo={scorebookLogo} descriptionText={graphicDesignText}/>
                    <StackedItem title={"High School Intern - Minecraft"} isExperiencePage={true} logo={microsoftLogo} descriptionText={highschoolText}/>
                </div>
            </div>
        );
    }
  }
  
export default ExperienceContainer;
  