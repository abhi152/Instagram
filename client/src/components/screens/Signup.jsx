import React from "react";
import { Link } from "react-router-dom";
const Signup=()=>{
    return(
        <div className="mycard input-field">

        <h1>Instagram</h1>
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />

        <button className="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">SignUp
        </button>

        <h6><Link to="/signin">Already have Account ?</Link></h6>
    </div>
    )
}
export default Signup