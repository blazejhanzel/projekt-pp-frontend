import '../App.css'
import React, { useState } from 'react'

function Post(props) {
    const getDate = () => {
        return props.createDate.slice(0, 19).replace('T', ' ')
    }

    return (
        <div className="post">
            {/* <button className="small-button" onClick={() => alert("hello!")}>Usuń</button> */}
            <div className="username">
                @{props.author}
            </div>
            <div className="info">{getDate()}</div>
            {props.title}
        </div>
    )
}

export default Post
