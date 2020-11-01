import { Button } from '@material-ui/core';
import React from 'react';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';

const Footer = () => {
    return (
        <footer>
            <div className="bg-dark">
                <div className="row justify-content-around">
                    <div className = 'text-warning pt-4'> <p>Contact me anytime =></p> </div>
                    <div className = 'text-right p-4 col-sm-6'>
                        <Button target = '_blank' style = {{color: 'white'}} href = 'https://github.com/basir5101' ><GitHubIcon/> </Button>
                        <Button target = '_blank'  style = {{color: 'white'}} href = 'https://facebook.com/basir5101' ><FacebookIcon/> </Button>
                        <Button target = '_blank' style = {{color: 'white'}} href = 'https://www.linkedin.com/in/abdul-basir-b087971b1/' ><LinkedInIcon/> </Button>
                        <Button target = '_blank' style = {{color: 'white'}} email = 'basir.bsmrstu@gmail.com' > <AlternateEmailIcon/> </Button>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;