import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

class Social extends Component {
    render() {
        return (
            
            <div class="social glass">
               
            <div class="btnsame btn1">
				<a href="https://github.com/anjum7866"><FontAwesomeIcon icon={faGithub} className="i1" size='2x'/></a>
			</div>
			<div class="btnsame btn3">
				<a href="https://linkedin.com/in/anjum-shaikh-2757a020a" ><FontAwesomeIcon icon={faLinkedin} className="i1" size='2x'/></a>
			</div>
			<div class="btnsame btn4">
				<a href="https://instagram.com/fitcoach_anjumshaikh" ><FontAwesomeIcon icon={faInstagram} className="i1" size='2x'/></a>
			</div>
            </div>
            )
        }
    }
    
export default Social
    