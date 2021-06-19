import '../App.css'
import React, { useState } from 'react'

function Item(props) {
    return (
        <div className="item">
            <div>{props.title}</div>
            <div className="username">{props.author && '@' + props.author}</div>
            <div className="info">{props.description}</div>
        </div>
    )
}

export default Item
