import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

class StackedItem extends React.Component {
    constructor (props) {
        super(props)
        this.state = { 
            isChevronActive: false,
        }
        this.onClick = this.onClick.bind(this)      
    }
    
    onClick () {
        this.setState({
          isChevronActive: !this.state.isChevronActive
        })
    }

    render () {
        return (
            <div className="stackedItemContainer">
                {this.props.isExperiencePage
                    ? (<div className={this.state.isChevronActive ? "itemHeadlineContainerExperience activeItemExperience" : "itemHeadlineContainerExperience"} onClick={this.onClick}>
                        <FontAwesomeIcon className={this.state.isChevronActive ? 'chevron rotateDown' : 'chevron'} icon={faChevronRight}/>
                        <h3>{this.props.title}</h3>
                        {this.props.logo 
                            ? (<img className="experienceLogo" src={this.props.logo} alt="logo"/>)
                            : null
                        }
                        </div>)
                    : (<div className={this.state.isChevronActive ? "itemHeadlineContainerProjects activeItemProjects" : "itemHeadlineContainerProjects"} onClick={this.onClick}>
                        <FontAwesomeIcon className={this.state.isChevronActive ? 'chevron rotateDown' : 'chevron'} icon={faChevronRight}/>
                        <h3>{this.props.title}</h3>
                        {this.props.logo 
                            ? (<img className="experienceLogo" src={this.props.logo} alt="logo"/>)
                            : null
                        }
                        </div>)
                }
                {this.state.isChevronActive
                    ? (<div className="itemDetailsContainer">
                        <div className="descriptionContainer">
                            <p className="categoryHeader">Description</p>
                            <p className="experienceDescription">{this.props.descriptionText[0]}</p>
                            {this.props.descriptionText[3]
                                ? <p className="categoryHeader">My Work</p>
                                : null
                            }
                            <p className="experienceDescription">{this.props.descriptionText[1]}</p>
                            <p className="experienceDescription">{this.props.descriptionText[2]}</p>
                        </div>
                        <div className="additionalInfoContainer">
                            <p className="linksDescription"><a href={this.props.descriptionText[5]} target="_blank" rel="noopener noreferrer">{this.props.descriptionText[3]}</a></p>
                            <p className="yearsDescription">{this.props.descriptionText[4]}</p>
                        </div>
                       </div>)
                    : (null)
                }
            </div>
        );
    }
  }
  
export default StackedItem;
  