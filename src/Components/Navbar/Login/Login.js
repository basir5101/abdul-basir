import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'

const Login = () => {
    const { register, handleSubmit , errors } = useForm();
    
   
    const onSubmit = data => {
        
        

        fetch("https://www.jptmemes.com/api/login", {
            
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json() )
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    };
    

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>

            
                <input className = 'form-control' placeholder = 'email' name="email" ref={register({ required: false })} />
                
                <input className = 'form-control' placeholder = 'password' name="password" ref={register({ required: false })} />
                
                <input className = 'btn btn-warning text-center' type="submit" />
            </form>
 
        </div>
    );
};

export default Login;