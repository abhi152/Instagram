import React from "react";

const createpost=()=> {
    return (
        <div className="card input-field" style={{textAlign:"center" }}>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Desciption" />

            <div class="file-field input-field" >
                <div class="btn  waves-effect waves-light #2196f3 blue" >
                    <span>Upload Image</span>
                    <input type="file" multiple/>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text" placeholder="Upload one or more files"/>
                </div>
            </div>

            <button   className="btn waves-effect waves-light #2196f3 blue" type="submit" name="action">Submit Post
            </button>

        </div>
    )
}

export default createpost;