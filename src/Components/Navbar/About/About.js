import React from 'react';
import Particles from 'react-particles-js';
import abdulBasir from '../../../images/abdulBasir.png';
import './About.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import Button from '@material-ui/core/Button';

const About = () => {
    return (
        <div>
        <div className = 'bg-dark text-white'>
           <Particles style = {{position: 'absolute'}}
                    params={{
                        particles: {
                        color: {
                            value: "#ffdd40"
                        },
                        line_linked: {
                            color: {
                            value: "#ffdd40"
                            }
                        },
                        number: {
                            value: 60
                        },
                        size: {
                            value: 4
                        }
                        }
                }}
                /> 
            <div className = 'row'>
 
                <div className = 'col-md-6'>
                    <img src={abdulBasir} alt="" className = 'w-100'/>
                </div>
                <div className = 'col-md-6 d-flex flex-column justify-content-around'>
                    <div>
                        <h2>Hello! I am <span className = 'text-success'>Abdul Basir</span> </h2>
                        <h3 id = 'occupation' className = 'text-primary'>Front End Web Developer <div id="type"></div> </h3>
                    </div>
                    <div className = 'text-right m-4'>
                        <Button variant="contained" color="primary" href = 'https://takeafile.com/?f=mabemewevu' target = '_blank' >Download Resume</Button>
                    </div>
                    <div className = 'text-right p-4'>
                        <Button target = '_blank' style = {{color: 'white'}} href = 'https://github.com/basir5101' ><GitHubIcon/> </Button>
                        <Button target = '_blank'  style = {{color: 'white'}} href = 'https://facebook.com/basir5101' ><FacebookIcon/> </Button>
                        <Button target = '_blank' style = {{color: 'white'}} href = 'https://www.linkedin.com/in/abdul-basir-b087971b1/' ><LinkedInIcon/> </Button>
                        <Button target = '_blank' style = {{color: 'white'}} email = 'basir.bsmrstu@gmail.com' > <AlternateEmailIcon/> </Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;