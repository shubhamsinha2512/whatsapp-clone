import React from 'react'
import {useState, useEffect} from 'react'

import './Register.css'

function Register() {

    const handleName = (event)=>{};
    const handleMobile = (event)=>{};
    const handlePwd = (event)=>{};
    const handleLogin = (event) => {
        event.preventDefault();
    };

    const handleRegister= (event) => {
        event.preventDefault();
    };

    return (
        <div className='register'>
            {/* <h1 className="register_Heading">Welcome to WhatApp!</h1> */}
            <div className="register_fromContainer">
                <div className="register_form">
                    <h2>Register</h2>
                    <form>
                        <input name="" placeholder="Full Name" onChange={handleName}/><br/>
                        <input name="" placeholder="Mobile Number" onChange={handleMobile}/><br/>
                        <input name="" placeholder="Password" onChange={handlePwd}/><br/>
                        <button type="submit" onClick={handleRegister}>Register</button>
                    </form>
                </div>

                <div className="register_form1">
                    <h2>Login</h2>
                    <form>
                        <input name="mobile" placeholder="Mobile Number" onChange={handleMobile}/><br/>
                        <input name="password" placeholder="Password" onChange={handlePwd}/><br/>
                        <button type="submit" onClick={handleLogin}>LogIn</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}

export default Register
