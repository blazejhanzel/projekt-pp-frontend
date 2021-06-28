import '../App.css'
import React, { useState } from 'react'
import { getCookie } from '../libraries/Cookie'
import { decodeToken } from 'react-jwt'

function Post(props) {
    const getDate = () => {
        return props.createDate.slice(0, 19).replace('T', ' ')

        
    }


    return (
        <div className="post">
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
            <div className="username">
                @{props.author}
            </div>
            <div className="info">{getDate()}</div>
            {props.title}
        </div>
    )
}

export default Post
