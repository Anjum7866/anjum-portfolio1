import React, { Component } from 'react';
import project1 from '../img/project-1.png';
import project2 from '../img/project-2.png';
import project3 from '../img/project-3.png';
import project4 from '../img/project-4.png';

class Portfolio extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">My Work</h1>
            <div className="hr_line line2 glass"><div className="inner2 inner3"></div></div>
            <div class="port_out port1 glass"><a href="https://holidays.clubmahindra.com//"><img src={project1} alt='proj1' className="po1"></img></a></div>
            <div class="port_out port2 glass"><a href="https://www.tecnolynxglobal.com/fincal"><img src={project2} alt='project2' className="po1"></img></a></div>
            <div class="port_out port3 glass"><a href="https://tribute.stageium.com/"><img src={project3} alt='proj3' className="po1"></img></a></div>
            <div class="port_out port4 glass"><a href="https://autopy.in/"><img src={project4} alt='proj4' className="po1"></img></a></div>
            </div>
            )
        }
    }
    
export default Portfolio
    