import React, { useState } from 'react';
import it from '../../../images/images/Aleron_IT.png';
import energia from '../../../images/images/Aleron_ENERGIA.png';
import { Link, NavLink } from 'react-router-dom';
import './Branch.css';
import Particles from 'react-particles-js';

const Branch = () => {

    const [english, setEnglish] = useState(true);

    const changeLanguage = (boolean) =>{
        setEnglish(boolean);
    }

    const branches = [
        {
            name: 'Aleron IT',
            headline_en: 'Consistent and reliable custom software development',
            headline_hg: 'Megbízható én konzisztens egyedi szoftverfejlesztés',
            link: 'https://aleron.dev',
            logo: it,
            id: 1,
        },
        {
            name: 'Aleron Energia',
            headline_en: 'Solar panel systems, air conditioners',
            headline_hg: 'Napelemes rendszerek, klímák',
            link: 'https://aleronenergia.hu',
            logo: energia,
            id: 2,
        },
        {
            name: 'Aleron Financial',
            headline_en: ' Corporate and residential financial advisement',
            headline_hg: 'Nagyvállalati és lakossági pénzügyi tanácsadás, versenyeztetés',
            link: 'https://aleronenergia.hu',
            logo: energia,
            id: 3,
        },
        
    ]
    return (
        <div>
            <header className = 'bg-dark text-white'>
                <nav className="navbar">
                    <div className="d-flex justify-content-center w-100">
                        <p onClick = {() => changeLanguage(true)} className = 'mr-4'>English</p>
                        <p onClick = {() => changeLanguage(false)}>Hungarian</p>
                    </div>
                </nav>
            </header>
            <Particles style = {{position: 'absolute', zIndex: '-1' , background: 'black', height: '200vh'}}
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
            <div className="row container m-auto">
                {
                branches.map(branch =>{
                    return <div className="branch-container col-md-6 col-lg-4 text-center">
                        <a className = 'branch-card nav-link' href = {branch.link}  target="_blank" >
                            <div className="card-group branches d-flex align-items-center">
                                <div className="card m-0">
                                    <img className="card-img-top"  src= {branch.logo} alt=""/>
                                    <div className="card-body">
                                        <h5 className="card-title"> {branch.name} </h5>
                                        {
                                            english ? <p className="card-text"> {branch.headline_en} </p> : <p className="card-text"> {branch.headline_hg} </p>
                                        }
                                    </div>
                                </div>
                            </div>
                        </a>
                        </div>
                }) 
                }
            </div>
        </div>
    );
};

export default Branch;