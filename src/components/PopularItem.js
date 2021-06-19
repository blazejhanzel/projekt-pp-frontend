import '../App.css'
import React, { useState } from 'react'

function PopularItem(props) {
    return (
        <div className="popularItem">
            <div>{props.title}</div>
        </div>
    )
}

export default PopularItem
