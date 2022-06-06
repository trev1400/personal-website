import React from "react";
import StackedItem from "./StackedItem";
import microsoftLogo from "../images/microsoft.png";
import riscLogo from "../images/risc.png";
import auxplosionLogo from "../images/auxplosion.png";
import mapDashLogo from "../images/mapdash.png";
import d4blLogo from "../images/d4bl.png";

class ProjectsContainer extends React.Component {
	render() {
		return (
			<div className="projectsContainer">
				<div className="headlineContainer">
					<h1>Projects</h1>
				</div>
				<div className="stackedListContainer">
					<StackedItem item={nmdw} />
					<StackedItem item={mootual} />
					<StackedItem item={auxplosion} />
					<StackedItem item={plugin} />
					<StackedItem item={mapDash} />
				</div>
			</div>
		);
	}
}

export default ProjectsContainer;

const nmdw = {
	title: "#NoMoreDataWeapons Testimony Web App - Data 4 Black Lives",
	description: [
		"Data 4 Black Lives is a group of activists, organizers, and scientists committed to the mission of using data to create concrete and measurable change in the lives of Black people.",
		"D4BL's #NoMoreDataWeapons campaign aims to delegitimize and deny the replacement of police with big data tools, tech surveillance, and mass digital supervision.",
		"The #NMDW Testimony web app empowers victims of data weapons to document and share their experiences through personal testimonies that are then represented in a searchable database.",
		"This project was completed as part of Brown's CSCI 1951I: CS for Social Change class, which partners teams of Brown CS students with social change organizations.",
	],
	work: [
		"- Created the Approver View component of the application, which fetches user testimonies and gives D4BL staff members the ability to review them and subsequently approve or deny the testimonies for the searchable database.",
		"- Integrated the Approver View with Auth0's Universal Login feature to create a basic authentication flow that only allows approvers with @d4bl.org domains and those on a whitelist to access the site.",
	],
	techStack: "ReactJS, TypeScript, Node.js, Express, MySQL",
	link: {
		text: "Video Demo of Approver View",
		url: "https://drive.google.com/file/d/1nHQ3xrgOaP3aP62i8mwHEnu7httMToKI/view?usp=sharing",
	},
	dates: "January 2022 - May 2022",
	logo: d4blLogo,
	isExperience: false,
};

const mootual = {
	title: "Mootual - Full Stack at Brown & RISC UChicago",
	description: [
		"Full Stack at Brown is a Brown University club committed to promoting the education of full stack software engineering by working on applications for the Brown community and beyond.",
		"Mootual is a React Native mobile app for UChicago’s Radical Innovation for Social Change lab. Mootual enables users to facilitate connections between their friends by giving them the ability to request and give friend introductions.",
	],
	work: [
		"- Led front-end UI development as well as build deployment via TestFlight.",
		"- Mootual has completed beta testing with UChicago students and faculty.",
		"- Worked with three other Brown student developers as part of the Full Stack at Brown project.",
	],
	techStack: "ReactNative (Expo), Postgres, Node.js, Sequelize",
	link: {
		text: "Video Demo",
		url: "https://drive.google.com/file/d/1Uqhi2Ux_Un7NRB0TY737W9Ys5aN4GpB7/view?usp=sharing",
	},
	dates: "January 2021 - May 2021",
	logo: riscLogo,
	isExperience: false,
};

const auxplosion = {
	title: "AUXplosion - Personal Project",
	description: [
		"A song recommendation generator that uses Spotify's API to suggest songs based on a 'seed track' provided by the user. Developed with a React front-end and a very basic Express back-end. I took on this side project to practice working with APIs and continue learning React.",
	],
	techStack: "ReactJS, Node.js, Express",
	link: {
		text: "Try AUXplosion!",
		url: "https://auxplosion.herokuapp.com/",
	},
	dates: "December 2020",
	logo: auxplosionLogo,
	isExperience: false,
};

const plugin = {
	title: "Voice-Powered Figma - Microsoft Hackathon 2020",
	description: [
		"Microsoft's annual Hackathon is the largest private global hackathon.",
		"This project was an accessibility plugin for Figma, a popular interface design tool. It uses LUIS, a Microsoft Natural Language Processing service, to translate voice commands into Figma actions so that users with limited mouse and keyboard mobility can still utilize this tool.",
		"The team had 15 members and was a mix of accessibility designers, program managers, software engineers, and interns.",
	],
	work: [
		"- Implemented the front-end UI for the plugin itself. This involved creating a dropdown list to display all valid voice commands, incorporating icon animations for listening states, and adding text prompts for error states.",
	],
	techStack: "TypeScript, HTML, CSS",
	link: {
		text: "Video Demo",
		url: "https://drive.google.com/file/d/1P_U4EnYG5_AlJKNaanj2VqrWbKUWdhcg/view?usp=sharing",
	},
	dates: "July 2020",
	logo: microsoftLogo,
	isExperience: false,
};

const mapDash = {
	title: "MapDash - CSCI 0320: Software Engineering",
	description: [
		"MapDash is a multiplayer Google StreetView-based game in which two users are given the same destination and tasked with racing to that destination in the StreetView.",
		"MapDash was created as a final project for Brown's CSCI 0320: Software Engineering.",
	],
	work: [
		"- Developed the UI for the main gameplay screen.",
		"- Interfaced ReactJS front-end with Java back-end web sockets.",
		"- Wrote extensive JUnit test suite using Mockito to simulate web socket connections to the back-end.",
	],
	techStack: "ReactJS, Node.js, Java, Java WebSocket API, SQL/SQLite",
	link: {
		text: "Video Demo",
		url: "https://drive.google.com/file/d/1Uqhi2Ux_Un7NRB0TY737W9Ys5aN4GpB7/view?usp=sharing",
	},
	dates: "March 2021 - April 2021",
	logo: mapDashLogo,
	isExperience: false,
};
