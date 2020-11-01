import React, { useEffect } from 'react';
import './Project.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ProjectCard = ({project}) => {
    useEffect(() =>{
        AOS.init({
            duration: 1100,
          })
          
    },[])
    return (
        <div data-aos="fade-right" data-aos-easing="ease-out-cubic" data-aos-duration="700" className = 'col-md-6 col-lg-4 mb-4 text-center text-white'>
            <div className = 'project m-2 p-3'>
            <div className="card-group m-3 ">
                <div className="card m-0">
                    <img className="card-img-top"  src= {project.picture} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title"> {project.title} </h4>
                        <p className="card-text"> {project.material} </p>
                        <button className="btn btn-dark"><a className = 'text-white' href= {project.url} > Visit Site </a></button>
                        <button className="btn btn-warning m-2"><a className = 'text-white' href= {project.gitHub} > GitHub Repository </a></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ProjectCard;