import React from "react";
import { Link ,useHistory } from "react-router-dom";
import M from "materialize-css"
const Signup=()=>{
    const history=useHistory()
    const[name,setname]=React.useState("")
    const[email,setemail]=React.useState("")
    const[password,setpassword]=React.useState("")
   
    const Postdata=()=>{

        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            M.toast({html: "Invalid Email",classes:"#1e88e5 blue darken-1"})
            return ;
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:name,
                password:password,
                email:email

            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error)
            {
                M.toast({html: data.error,classes:"#1e88e5 blue darken-1"})
            }
            else if(data.message)
            {
                M.toast({html: data.message,classes:"#1e88e5 blue darken-1"})
                history.push("/signin")
            }
        })
    }
   
    return(
        <div className="card input-field" style={{ textAlign:"center"}}>

        <h1>Instagram</h1>
        <input type="text" placeholder="Name" value={name} onChange={(event)=>{
           
            setname(event.target.value)
           
        }} />
        <input type="text" placeholder="Email" value={email} onChange={(event)=>{
            setemail(event.target.value)
        }} />
        <input type="text" placeholder="Password" value={password} onChange={(event)=>{
            setpassword(event.target.value)
        }} />

        <button className="btn waves-effect waves-light #2196f3 blue" type="submit" name="action" onClick={()=>{
            Postdata()
            setname("")
            setemail("")
            setpassword("")
        }}>SignUp
        </button>

        <h6><Link to="/signin">Already have Account ?</Link></h6>
    </div>
    )
}
export default Signup