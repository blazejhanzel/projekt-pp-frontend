import '../App.css'
import React, { useState } from 'react'

function Item(props) {
    return (
        <div className="item">
            {/* 
                (() => {
                    if (props.type !== 'section')
                    return <button className="small-button" onClick={() => alert("hello!")}>Usuń</button>
                })()
            */}
            <div>{props.title}</div>
            <div className="username">{props.author && '@' + props.author}</div>
            <div className="info">{props.description}</div>
        </div>
    )
}

export default Item
