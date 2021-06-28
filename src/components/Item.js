import '../App.css'
import React, { useState } from 'react'
import { getCookie } from '../libraries/Cookie'
import { decodeToken } from 'react-jwt'

function Item(props) {
    return (
        <div className="item">
              {
            (() => {
                if(decodeToken(getCookie("jwt"))!==null)
                {
                if ((props.author === decodeToken(getCookie("jwt")).sub)||(props.postRole==="ROLE_ADMIN")) {
                    return (
                        <button className="small-button" onClick={props.onClick}>Usuń</button>
                    )
                }
             }
            })()
            }
            <div>{props.title}</div>
            <div className="username">{props.author && '@' + props.author}</div>
            <div className="info">{props.description}</div>
        </div>
    )
}

export default Item
