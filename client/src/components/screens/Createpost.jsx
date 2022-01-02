import React from "react";
import M from "materialize-css"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
const Createpost=()=> {

    const[title,setTitle]=React.useState("")
    const[body,setBody]=React.useState("")
    const[image,setImage]=React.useState("")
    const[url,setUrl]=React.useState("")
    const history=useHistory()
    useEffect(()=>{
        if(url)
        {
            fetch("/createpost",{
                method:"post",
                headers:{
                    "Content-Type":"application/json",
                    "Authorization":"Bearer "+localStorage.getItem("jwt")
                },
                body:JSON.stringify({
                   
                   title,
                   body,
                  pic:url
    
                })
            }).then(res=>res.json())
            .then(data=>{
                console.log(data)
                if(data.error)
                {
                    M.toast({html: data.error,classes:"#1e88e5 blue darken-1"})
                }
                else 
                {
                    M.toast({html:"Uploaded in Suucesfully",classes:"#1e88e5 blue darken-1"})
                  
                    history.push("/")
                }
            })
        }
    },[url])
    const postDetails=()=>{
        const data=new FormData()
        data.append("file",image)
        data.append("upload_preset","insta-clone")
        data.append("cloud_name","abhinav-instagram")
        fetch("https://api.cloudinary.com/v1_1/insta-clone/image/upload",{
            method:"post",
            body:data
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setUrl(data.url)
        })



       
    }
    return (
        <div className="card input-field" style={{textAlign:"center" }}>
            <input type="text" placeholder="Title" value={title} onChange={(event)=>{
                setTitle(event.target.value)
            }} />
            <input type="text" placeholder="Desciption" value={body} onChange={(event)=>{
                setBody(event.target.value)
            }} />

            <div class="file-field input-field" >
                <div class="btn  waves-effect waves-light #2196f3 blue" >
                    <span>Upload Image</span>
                    <input type="file" multiple onChange={(e)=>{
                        setImage(e.target.files[0])
                    }}/>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one or more files"/>
                </div>
            </div>

            <button   className="btn waves-effect waves-light #2196f3 blue" type="submit" name="action" onClick={()=>{
                postDetails()
            }}>Submit Post
            </button>

        </div>
    )
}

export default Createpost;