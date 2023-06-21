import React, { Component } from 'react';


class About extends Component {
    render() {
        return (
            <div className="condiv">
            <h1 className="subtopic">About Me</h1>
            <div className="hr_line line2 glass"><div className="inner2"></div></div>
            <h2 className="abouthead">Anjum <mark className="mark2">Shaikh</mark></h2>
            <p>Software Developer</p>
            <br></br>
            <p className="p10">I started my journey in the world of computers from 2020,
            I completed my degree in Electronics & Telecommunication from Savitribai Phule Pune University.
              Web development is my center of interest.
            </p>
            <div className="Edu">
                <div class="back1 back2"><i class="fa fa-book i1 i3"></i></div>
            </div>
            <h3>Education</h3>
            <div className="vr_line glass">
                <div className="vr_inner inn1"></div>
                <div className="vr_inner inn2"></div>
            </div>
            <h4>B.E in Electronics & Telecommunication</h4>
            <p className="p1">Savitribai Phule Pune University</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>May 2014 - 2018</p>
            <h4>High School</h4>
            <p className="p1">Shri Chh. Shivaji High School, Deolali Pravara, Ahmednagar</p>
            <p className="p1"><i class="fa fa-calendar i2"></i>feb 2014</p>

            <h3 class="sk_head">Skills</h3>
            <div class="sk glass">HTML</div>
            <div class="sk s2 glass">CSS</div>
            <div class="sk s3 glass">JavaScript</div>
            <div class="sk s4 glass">React</div>
            <div class="sk s5 glass">PHP</div>
            <div class="sk s6 glass">Laravel</div>
            <div class="sk s7 glass">Codeigniter</div>
            </div>
            )
        }
    }
    
export default About
    