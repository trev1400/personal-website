import React from "react";
import StackedItem from "./StackedItem";
import microsoftLogo from "../images/microsoft.png";
import oktaLogo from "../images/okta.png";
import scaleroLogo from "../images/scalero.png";

class ExperienceContainer extends React.Component {
	render() {
		return (
			<div className="experienceContainer">
				<div className="headlineContainer">
					<h1>Experience</h1>
				</div>
				<div className="stackedListContainer">
					<StackedItem item={okta} />
					<StackedItem item={msftSWE} />
					<StackedItem item={scalero} />
					<StackedItem item={explore} />
					<StackedItem item={highSchool} />
				</div>
			</div>
		);
	}
}

export default ExperienceContainer;

const okta = {
	title: "Software Engineer Intern - Okta Enterprise Auth",
	description: [
		"Okta is the world's leading identity company, creating products and solutions that secure the digital interactions of 15,800+ client organizations.",
		"Okta's Enterprise Auth team builds and enables all of Okta's multi-factor authentication (MFA) solutions across its suite of products and services.",
	],
	work: [
		"- Building a WebAuthn (MFA) authenticator catalog that enables Okta client admins to customize and enforce an accepted list of authenticators that their organization uses.",
	],
	link: {
		text: "Learn more about Okta's work with WebAuthn",
		url: "https://help.okta.com/en/prod/Content/Topics/Security/mfa-webauthn.htm",
	},
	dates: "May 2022 - August 2022",
	logo: oktaLogo,
	isExperience: true,
};

const msftSWE = {
	title: "Software Engineer Intern - Microsoft Fluid Framework",
	description: [
		"Microsoft's Fluid Framework team builds and maintains a collection of libraries for distributing and synchronizing shared state.",
		"This Fluid Framework serves as the backbone for dynamic Microsoft-built and client developer-built collaborative applications.",
	],
	work: [
		"- Built the home screen UI for Microsoft’s new hyper collaborative productivity app, Loop, in a React/TypeScript stack by developing custom React components and leveraging Microsoft Fluent UI controls.",
		"- Integrated home screen UI with back-end APIs and data stores to implement features and user functionalities.",
		"- Created a Jest and React Testing Library-based test suite for the UI that increased code coverage by 80%.",
	],
	link: {
		text: "Check out Loop!",
		url: "https://www.microsoft.com/en-us/microsoft-loop",
	},
	dates: "May 2021 - August 2021",
	logo: microsoftLogo,
	isExperience: true,
};

const explore = {
	title: "Explorer Intern - Microsoft Office Core Experiences",
	description: [
		"Microsoft's Explore Program is a 12-week internship that allows aspiring technologists to try both the Program Manager and Software Engineer roles.",
		"Microsoft's Office Core Experiences team develops all of the shared UI controls across the desktop Microsoft Office Suite.",
	],
	work: [
		"- Program Management Phase: Identified pain points with Office’s in-app learning experience; Created a high-fidelity project prototype in Figma; Conducted two user testing sessions and utilized insights to iterate on design.",
		"- Engineering Phase: Programmed in C++ and Microsoft’s XML-based markup language to build the front-end UI and back-end framework for a new Office in-app learning experience; Built pop-up dialog UI for a voice-powered Figma plugin as part of a Microsoft Hackathon team; Collaborated daily with two intern teammates during both phases.",
	],
	link: {
		text: "",
		url: "",
	},
	dates: "May 2020 - August 2020",
	logo: microsoftLogo,
	isExperience: true,
};

const scalero = {
	title: "Frontend Engineer Intern - Scalero",
	description: [
		"Scalero is an email marketing company that offers services for email marketing and automation as well as applications for going from email design to code.",
	],
	work: [
		"- Developed the Layout tab of a React + TypeScript-based Figma plugin for Cannoli: a tool that converts Figma designs into HTML email code.",
		"- Interfaced plugin's React frontend with Figma plugin API to enable users to create Figma email artboards that adhere to Cannoli's layout standards for processing Figma designs into HTML email code.",
		"- Built email templates web page for scalerio.io and dynamic home screen for cannoli.app.",
	],
	link: {
		text: "Check out the Cannoli Figma Plugin",
		url: "https://www.figma.com/community/plugin/1053770884164943496/Cannoli---Figma-to-email-code%2C-including-HTML-and-MJML",
	},
	dates: "December 2021 - May 2022",
	logo: scaleroLogo,
	isExperience: true,
};

const highSchool = {
	title: "High School Intern - Minecraft",
	description: [
		"Microsoft's High School Program is a 10-week internship for high school students from the Greater Seattle area who have a demonstrated interest in technology.",
	],
	work: [
		"- First summer in program, worked on Minecraft: Education Edition Marketing Team. Produced marketing material, social media posts, and texture pack graphic design. Conducted competitive analysis of 11 learn-to-code programs to assist Minecraft’s market research.",
		"- Second summer in program, worked on Minecraft Design Team. Designed pixel art icons, avatar skins, and logos for two intern team minigames. Created custom start screen user interfaces and implemented art assets into minigames using Minecraft’s JSON-based resource packs.",
	],
	link: {
		text: "",
		url: "",
	},
	dates: "June 2018 - August 2018 | June 2019 - August 2019",
	logo: microsoftLogo,
	isExperience: true,
};
