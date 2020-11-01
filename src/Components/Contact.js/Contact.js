import React from 'react';
import Navbar from '../Navbar/Navbar';
import { useForm } from "react-hook-form";

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        data.service_id = 'user_I9ikZKv7g1sGPOA2KXfWq';
        data.template_id = 'template_qbo9c7i';
        data.user_id = '01774066225';
        fetch('https://api.emailjs.com/api/v1.0/email/send', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(data)
    };
    return (
        <div className = 'bg-info'>
            <div className = 'm-5 col-sm-10 col-md-8 col-lg-7 m-auto p-5'>
                <h3 className = 'text-white p-5 text-center'>Get In Touch</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    
                    <input placeholder = 'your name' className = 'form-control' name="name" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>name is required</span>}

                    <input placeholder = 'subject' className = 'form-control' name="subject" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <textarea placeholder = 'your message' className = 'form-control' name="message" ref={register({ required: true })} />
                    {errors.exampleRequired && <span>This field is required</span>}
                    
                    <input className = 'form-control btn btn-success' type="submit" />
                </form>
            </div>
        </div>
    );
};

export default Contact;