import React from 'react'

import LoginImg from '../utils/img-01.png'

import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {

    return (
        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-pic js-tilt" >
                        <img src={LoginImg} alt="IMG" />
                    </div>

                    <form className="login100-form validate-form">
                        <span className="login100-form-title">
                            Member Login
                        </span>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="text" name="email" placeholder="Email" required />

                            <span className="symbol-input100">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="wrap-input100 validate-input">
                            <input className="input100" type="password" name="pass" placeholder="Password" required />

                            <span className="symbol-input100">
                                <i className="fa fa-lock" aria-hidden="true"></i>
                            </span>
                        </div>

                        <div className="container-login100-form-btn">
                            <Link to='/home' className="login100-form-btn">
                                LOGIN

                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login