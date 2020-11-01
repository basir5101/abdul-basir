import React from 'react';
import creativeAgency from '../../../images/projects/crative-agency.jpg';
import redOnion from '../../../images/projects/red-onion.jpg';
import volunteer from '../../../images/projects/volunteer-network.jpg';
import travelGuru from '../../../images/projects/travel-guru.jpg';
import eSchool from '../../../images/projects/e-school.jpg';
import panda from '../../../images/projects/panda-commerce.jpg';
import gadget from '../../../images/projects/hot-gatget.jpg';
import portfolio from '../../../images/projects/web-portfolio.jpg';
import ProjectCard from './ProjectCard';
import './Project.css';
import Navbar from '../Navbar';

const Projects = () => {
    const projects = [
        {
            title: 'Creative Agency',
            picture: creativeAgency,
            material: 'html, css, JS, react, firebase, node js, mongodb',
            category: 'Full Stack',
            url: 'https://creative-agency5101.web.app/',
            gitHub: 'https://github.com/basir5101/creative-agency-client/',

        },
        {
            title: 'Red Onion',
            picture: redOnion,
            material: 'html, css, JS, react, firebase, node js, mongodb',
            category: 'Front End',
            url : 'https://red-onioon.web.app/',
            gitHub: 'https://github.com/basir5101/travel-guru/',
        },
        {
            title: 'Volunteer Network',
            picture: volunteer,
            material: 'html, css, JS, react, firebase, node js, mongodb',
            category: 'Full Stack',
            url : 'https://valuneer-network.web.app/',
            gitHub: 'https://github.com/basir5101/volunteer-network-client/',
        },
        {
            title: 'Travel Guru',
            picture: travelGuru,
            material: 'html, css, JS, react, firebase',
            category: 'Front End',
            url : 'https://travel-guru-awesome.web.app/',
            gitHub: 'https://github.com/basir5101/travel-guru/',
        },
        {
            title: 'E-School',
            picture: eSchool,
            material: 'html, css, JS',
            category: 'Front End',
            url : 'https://basir5101.github.io/e-school/',
            gitHub: 'https://basir5101.github.io/e-school/',
        },
        {
            title: 'Panda Commerce',
            picture: panda,
            material: 'html, css, JS',
            category: 'Front End',
            url : 'https://basir5101.github.io/panda-commerce/',
            gitHub: 'https://github.com/basir5101/panda-commerce',
        },
        {
            title: 'Hot Gadget',
            picture: gadget,
            material: 'html, css, JS',
            category: 'Front End',
            url: 'https://basir5101.github.io/hot-gadgets/',
            github: 'https://github.com/basir5101/hot-gadgets',
        },
        {
            title: 'Web Portfolio',
            picture: portfolio,
            material: 'html, css, JS',
            category: 'Front End',
            url: 'https://basir5101.github.io/web-portfolio/',
            github: 'https://github.com/basir5101/web-portfolio',
        },

    ]
    return (
        <div>
            <div className="bg-dark">
                <h3 id = 'title' className = 'text-center text-white bg-success p-3'>Projects... </h3>
                <div className = 'row container m-auto'>
                    {
                        projects.map(project => <ProjectCard project = {project} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Projects;