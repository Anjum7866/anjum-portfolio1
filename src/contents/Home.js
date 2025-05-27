import React, { Component } from 'react';
 import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
            <h1>Anjum <mark>Shaikh</mark></h1>
            <ReactTypingEffect className="typingeffect" text={['A Software Engineer','React Developer','Fontend Developer']} speed={100} eraseDelay={900}/>
            <div className="hr_line glass"><div className="hr_inner"></div></div>
            <p className='p-2 m-2'>Software Engineer with 3+ years of experience in React.js, JavaScript and RESTful APIs. Skilled in front-end and back- end development, performance optimization, and scalable web application development. Experienced in Fintech, Ed-tech, SaaS, and
                Hospitality domains. Strong understanding of Database, Git and API integration. Based in Pune with a BE in Electronics &
                Telecommunication.
                </p>
            <Social />
            </div>
            )
        }
    }
    
    export default Home
    