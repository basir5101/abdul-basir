import React from 'react';
import Navbar from '../Navbar/Navbar';
import blogImg from '../../images/blog/Screenshot_1.png'

const Blogs = () => {
    return (
        <div className = 'bg-dark'>
            <div className = 'col-md-6 col-lg-4 mb-4 text-center text-white'>
            <div className = ' m-2 p-3'>
            <div className="card-group m-3 ">
                <div className="card m-0">
                    <img className="card-img-top"  src= {blogImg} alt=""/>
                    <div className="card-body">
                        <h4 className="card-title text-success"> The 10 Topics of JavaScript you should know in 2020 </h4>
                        <p className="card-text"> The list we are going to learn…
                        <br/>
                            1. Variable (var, let) and const
                            <br/>
                            2. For loop
                            <br/>
                            3. Data types..... </p>
                        <button className="btn btn-primary"><a className = 'text-white' href= 'https://medium.com/@basir.bsmrstu/the-10-topics-of-javascript-you-should-know-in-2020-a169185dfb28' > Read Article </a></button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Blogs;