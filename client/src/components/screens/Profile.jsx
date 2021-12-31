import React from "react";

const Profile = () => {
    return (
        <div style={{maxWidth:"700px",margin:"10px auto"}}>
            <div style={{ display: "flex", justifyContent: "space-around" ,borderBottom:"1px solid gray"}}>
                <div>
                    <img style={{ width: "200px", height: "200px", borderRadius: "100px" }} src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                </div>

                <div>
                    <h4>Rajesh</h4>
                    <div style={{ display: "flex", justifyContent: "space-between", width: "108%" }}>
                        <h5>40 posts</h5>
                        <h5>40 follower</h5>
                        <h5>40 following</h5>
                    </div>
                </div>
            </div>

            <div className="gallary">
                <img  className="items" src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                <img  className="items" src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                <img  className="items" src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                <img  className="items" src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                <img  className="items" src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
                <img  className="items" src="https://images.unsplash.com/photo-1618284554746-71a7b3e923c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" />
              
            </div>
        </div>

    )
}
export default Profile