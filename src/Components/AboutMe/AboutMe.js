import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import { Button, } from '@material-ui/core';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const AboutMe = () => {
  
    return (
        <div>
            <div className = 'header text-center mt-4'>
                <h3>Abdul Basir</h3>
                <h5>Junior Frontend Web Developer</h5>
                <div>
                    <Button  target = '_blank' style = {{color: 'green'}} href = 'tel:+8801774066225' ><PhoneIcon/>  </Button>
                    <Button  target = '_blank' style = {{color: 'green'}} href = 'tel:+8801774066225' ><WhatsAppIcon/>  </Button>
                    <Button target = '_blank' style = {{color: ''}} href = 'https://github.com/basir5101' ><GitHubIcon/> </Button>
                    <Button target = '_blank'  style = {{color: 'blue'}} href = 'https://facebook.com/basir5101' ><FacebookIcon/> </Button>
                    <Button target = '_blank' style = {{color: 'blue'}} href = 'https://www.linkedin.com/in/abdul-basir-b087971b1/' ><LinkedInIcon/> </Button>
                    <Button target = '_blank' style = {{color: 'red'}} href = 'mailto:basir.bsmrstu@gmail.com' > <AlternateEmailIcon/> </Button>
                </div>
            </div>
            
            <div className = 'skills p-2 border m-3 '>
                <h2> Programming skills </h2>
                <hr/>
                <div className = 'p-4'>
                    <p><strong>Expertise: </strong>  html, css, bootstrap, JavaScript, ES6, react, material ui, react hook, firebase.</p>
                    <p> <strong>Conformable: </strong> Nodejs, Express js, Mongodb</p>
                    <p> <strong>Familiar: </strong> SCSS, LESS, Redux</p>
                    <p> <strong>Tools: </strong> git, chrome dev tools, vs code</p>
                </div>
            </div>

            <div className = 'education p-2 border m-3 '>
                <h2> Education </h2>
                <hr/>
                <div className = 'p-4'>
                    <p><strong>Rohanpur A.B Govt. School, Rohanpur</strong>  SSC(2015)</p>
                    <p> <strong>Rohanpur Yusuf Ali College, Rohanpur </strong> hsc(2017)</p>
                    <p> <strong>Bangabandhu Sheikh Mujibur Rahman Science and Technology, Gopalganj-8100
                     </strong> running </p>
                </div>
            </div>
        </div>
    );
};

export default AboutMe;