import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

import './Auth.css'
import {BASE_URI} from '../config'

function Auth() {

    var server = axios.create({
        baseURL:BASE_URI
    });

    var [userDetails, setUserDetails] = useState({
        name:'',
        mobile:'',
        password:''
    })

    const handleName = (event)=>{
        setUserDetails({
            name:event.target.value,
            mobile:userDetails.mobile,
            password:userDetails.name
        })
    };

    const handleMobile = (event)=>{
        setUserDetails({
            name:userDetails.name,
            mobile: event.target.value,
            password:userDetails.password
        })
    };

    const handlePwd = (event)=>{
        setUserDetails({
            name:userDetails.name,
            mobile:userDetails.mobile,
            password:event.target.value
        })
    };

    const handleLogin = (event) => {
        event.preventDefault();
        console.log(userDetails);
        server.post('/auth/login', {userDetails}).then((response)=>{
            console.log(response)
        });
    };

    const handleRegister= (event) => {
        event.preventDefault();
        console.log(userDetails);
        server.post('/auth/register',{userDetails}).then((response)=>{
            console.log(response);
        })
    };

    return (
        <div className='auth'>
            <h1 className="auth_Heading">Welcome to WhatApp!</h1>

            <div className="login forms">
            <h2>Login</h2>
                <form>
                    <input name="mobile" type='number' placeholder="Mobile Number" onChange={handleMobile}/><br/>
                    <input name="password" type='password' placeholder="Password" onChange={handlePwd}/><br/>
                    <button type="submit" onClick={handleLogin}>LogIn</button>
                </form>
            </div>

            <div className="register forms">
            <h2>Register</h2>
                <form>
                    <input name="" placeholder="Full Name" onChange={handleName}/>
                    <input name="mobile" placeholder="Mobile Number" onChange={handleMobile}/><br/>
                    <input name="password" placeholder="Password" onChange={handlePwd}/><br/>
                    <button type="submit" onClick={handleRegister}>Register</button>
                </form>
            </div>
        </div>
    )
}

export default Auth



{/* <div className="Auth_fromContainer">
                <div className="Auth_form">
                    <h2>Auth</h2>
                    <form>
                        <input name="" placeholder="Full Name" onChange={handleName}/><br/>
                        <input name="" placeholder="Mobile Number" onChange={handleMobile}/><br/>
                        <input name="" placeholder="Password" onChange={handlePwd}/><br/>
                        <button type="submit" onClick={handleAuth}>Auth</button>
                    </form>
                </div>

                <div className="Auth_form">
                    
                </div>
            </div>
             */}