import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class StackedItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isChevronActive: false,
		};
		this.onClick = this.onClick.bind(this);
	}

	onClick() {
		this.setState({
			isChevronActive: !this.state.isChevronActive,
		});
	}

	render() {
		return (
			<div className="stackedItemContainer">
				<div
					className={
						this.props.item.isExperience
							? this.state.isChevronActive
								? "itemHeadlineContainerExperience activeItemExperience"
								: "itemHeadlineContainerExperience"
							: this.state.isChevronActive
							? "itemHeadlineContainerProjects activeItemProjects"
							: "itemHeadlineContainerProjects"
					}
					onClick={this.onClick}
				>
					<FontAwesomeIcon
						className={
							this.state.isChevronActive
								? "chevron rotateDown"
								: "chevron"
						}
						icon={faChevronRight}
					/>
					<h3>{this.props.item.title}</h3>
					{this.props.item.logo ? (
						<img
							className="experienceLogo"
							src={this.props.item.logo}
							alt="logo"
						/>
					) : null}
				</div>
				{this.state.isChevronActive ? (
					<div className="itemDetailsContainer">
						<div className="descriptionContainer">
							<p className="categoryHeader">Description</p>
							{this.props.item.description.map((line, index) => {
								return (
									<p
										key={index}
										className="experienceDescription"
									>
										{line}
									</p>
								);
							})}
							{this.props.item.work && (
								<div>
									<p className="categoryHeader">My Work</p>
									{this.props.item.work.map((line, index) => {
										return (
											<p
												key={index}
												className="experienceDescription"
											>
												{line}
											</p>
										);
									})}
								</div>
							)}
							{this.props.item.techStack && (
								<div>
									<p className="categoryHeader">Tech Stack</p>
									<p className="experienceDescription">
										{this.props.item.techStack}
									</p>
								</div>
							)}
						</div>
						<div className="additionalInfoContainer">
							<p className="linksDescription">
								<a
									href={this.props.item.link.url}
									target="_blank"
									rel="noopener noreferrer"
								>
									{this.props.item.link.text}
								</a>
							</p>
							<p className="yearsDescription">
								{this.props.item.dates}
							</p>
						</div>
					</div>
				) : null}
			</div>
		);
	}
}

export default StackedItem;
