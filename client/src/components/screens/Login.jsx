import React from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <div className="mycard input-field">

            <h1>Instagram</h1>
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Password" />

            <button className="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">Login
            </button>
            <h6><Link to="/signup">Don't have an Account ?</Link></h6>
        </div>




    )
}
export default Login