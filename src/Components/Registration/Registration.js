import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import 'react-phone-number-input/style.css'

const Registration = () => {

    const { register, handleSubmit , errors } = useForm();
    const  [newUser, setNewUser] = useState({});
   
    const onSubmit = data => {
        
        const user = {...data};
        user.birth_date = "";
        user.avatar = "";
        user.gcm_token = "";
        setNewUser(user);
        console.log(newUser)

        fetch("https://www.jptmemes.com/api/signup", {
            
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json() )
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    };

    return (
        <div>
             <form onSubmit={handleSubmit(onSubmit)}>

                <input className = 'form-control' placeholder = 'username' name="username" ref={register({ required: false })} />                

                <input className = 'form-control' placeholder = 'first name' name="first_name" ref={register({ required: false })} />
                
                <input className = 'form-control' placeholder = 'last name' name="last_name" ref={register({ required: false })} />
                

                <input className = 'form-control' placeholder = 'birth date' name="birth_date" ref={register({ required: false })} />

                
                <input className = 'form-control' placeholder = 'phone' name="phone" ref={register({ required: false })} />
                

                <input className = 'form-control' placeholder = 'email' name="email" ref={register({ required: false })} />
                
                <input className = 'form-control' placeholder = 'password' name="password" ref={register({ required: false })} />
                
                <input className = 'form-control' placeholder = 'confirm' name="confirm_password" ref={register({ required: false })} />
                
                <input className = 'btn btn-warning text-center' type="submit" />
            </form>

            {

            }
        </div>
    );
};

export default Registration;