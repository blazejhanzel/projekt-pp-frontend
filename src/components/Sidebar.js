import './Sidebar.css'
import React, { useState, useEffect } from 'react'
import { isExpired, decodeToken } from 'react-jwt'
import { getCookie, setCookie } from '../libraries/Cookie'

function Sidebar(props) {
    const [logged, setLogged] = useState(getCookie("jwt"))
    const [login_button_text, setLoginButtonText] = useState("Zaloguj")
    const username = ((logged) ? decodeToken(getCookie("jwt")).sub : "unknown")

    const logout = () => {
        setCookie("jwt", "", -1)
        document.location.reload()
    }

    const openRegisterPage = () => {
        props.setPage(props.PageEnum.register)
    }

    const signin = async () => {
        setLoginButtonText("Logowanie...")

        let data = {
            "username": document.getElementById("login_field").value,
            "password": document.getElementById("password_field").value
        }

        fetch("https://projekt-pp-backend.herokuapp.com/login", {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => {
                if (response.status === 200) {
                setCookie("jwt", data.jwt, 10)
                setLogged(true)
            } else {
                alert(response.status)
            }
        }))
    }

    return (
        <div className="sidebar">
            {(() => {
                if (props.page != props.PageEnum.register) {
                    if (logged) return (
                        <div id="login_form">
                            <p>@{username}</p>
                            <button type="button" onClick={logout}>Wyloguj</button>
                        </div>
                    ) 
                    else return (
                        <div id="login_form">
                            <input type="text" id="login_field" placeholder="login" /><br />
                            <input type="password" id="password_field" placeholder="hasło" />
                            <button type="button" onClick={signin}>{login_button_text}</button>
                            <button type="button" onClick={openRegisterPage}>Zarejestruj</button>
                        </div>
                    )
                }
            })()}
            <input type="text" id="search_form" placeholder="wyszukaj" />
            <button type="button" className="wide_button">Najpopularniejsze wątki</button>
            <ul>
                <li>Wątek 1</li>
                <li>Wątek 2</li>
                <li>Wątek 3</li>
            </ul>
            <button type="button" className="wide_button">Dodaj wątek</button>
        </div>
    )
}

export default Sidebar
