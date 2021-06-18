import '../App.css'
import React, { useState } from 'react'

function Item(props) {
    return (
        <div className="item">
            {props.title}
        </div>
    )
}

export default Item
