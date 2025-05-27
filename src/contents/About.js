import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Anjum <mark className="mark2">Shaikh</mark></h2>
            <p>Software Engineer</p>
            <br></br>
            <p className="p10">Software Engineer with 3+ years of experience in React.js, JavaScript and RESTful APIs. Skilled in front-end and back-end development, performance optimization, and scalable web application development. Experienced in Fintech, Ed-tech, SaaS, and Hospitality domains. Strong understanding of Database, Git and API integration. Based in Pune with a BE in Electronics & Telecommunication.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Experience</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>UpGrad Education Private Limited</h4>
            <p className="p1">Client:- Club Mahindra</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>July 2024 - Current</p>
            <h4>Software Engineer</h4>
            <p className="p1">Working on member holiday portal based on react(https://holidays.clubmahindra.com/). Also working on api implementation of App (Club Mahindra application)</p>
            {/* <p className="p1"><i class="fa fa-calendar i2"></i>feb 2014</p> */}

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">Next.js</div>
            <div class="sk s6 glass">PHP</div>
            </div>
            )
        }
    }
    
export default About
    