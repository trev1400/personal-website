import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


class SocialLinks extends React.Component {
    render () {
        return (
            <div className="socialLinksContainer">
                <div className="icons">
                    <a href="https://www.linkedin.com/in/trevor-ing/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="socialIcon" icon={faLinkedin} />   
                    </a>
                    <a href="https://www.instagram.com/trev.ing/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
                    </a>
                    <a href="mailto:trevor_ing@brown.edu" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="socialIcon" icon={faEnvelope} />
                    </a>
                    <a href="https://github.com/trev1400" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon className="socialIcon" icon={faGithub} />
                    </a>
                </div>
                <div className="verticalIconDivider" />
            </div>
        );
    }
  }
  
export default SocialLinks;
  