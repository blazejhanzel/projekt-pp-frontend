import './Sidebar.css'
import React, { useState, useEffect } from 'react'
import { isExpired, decodeToken } from 'react-jwt'
import { getCookie, setCookie } from '../libraries/Cookie'
import PopularItem from './PopularItem'
import Post from './Post'
import Item from './Item'
import OpenedThreadPage from './OpenedThreadPage'
import { WindowsBalloon } from 'node-notifier'

function Sidebar(props) {
    const [logged, setLogged] = useState(getCookie("jwt"))
    const [login_button_text, setLoginButtonText] = useState("Zaloguj")
    const username = ((logged) ? decodeToken(getCookie("jwt")).sub : "unknown")
    const [threads, setThreads] = useState([])

    useEffect(() => {
        props.setUserLogged(username)
    })

    const logout = () => {
        setCookie("jwt", "", -1)
        document.location.reload()
    }

    const openAddThreadForm = () => {
        props.setPage(props.PageEnum.add_thread)
    }

    const openAddSectionForm = () => {
        props.setPage(props.PageEnum.add_section)
    }

    const openRegisterPage = () => {
        props.setPage(props.PageEnum.register)
    }

    const getPopularTopics = () => {
        fetch("https://projekt-pp-backend.herokuapp.com/mostPopularTopics/1", {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                let result = []
                let count = 0
                for (let thread of data) {
                    count++
                    result.push(
                        <div >
                            <PopularItem title={thread.title} onClick={()=>openThread(thread.title, thread.login, thread.description, thread.id)}  />
                        </div>
                        )
                    if(count>4)
                        break
                }
                setThreads(result)
            }
        }))
    }


    const openThread = (title, login , description, id) => {

        fetch(`https://projekt-pp-backend.herokuapp.com/topic/${id}/post`, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            }
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                let result = []
                
                for (let post of data) {
                    result.push(<Post title={post.text} author={post.login} createDate={post.createDate} />)
                }
                props.setPopularPosts(result)
            }
        }))

        props.setThreadName(title)
        props.setThreadDescription(description)
        props.setThreadAuthor(login)
        props.setThreadId(id)
        props.setPage(props.PageEnum.opened_thread)
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
                document.location.reload()
            } else {
                setLoginButtonText(`Błąd ${response.status}`)
                setTimeout(() => { setLoginButtonText('Zaloguj') }, 3000);
            }
        }))
    }

    const returnToHomePage = () => {
        props.setPage(props.PageEnum.home)
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
            {/* <input type="text" id="search_form" placeholder="wyszukaj" /> */}
            <div style={{marginTop: 100 + 'px', height: 1 + 'px'}}></div>
            <button style={{marginTop: 100 + 'px!important'}} type="button" className="wide_button" onClick={getPopularTopics}>Najpopularniejsze tematy</button>
            
            <div className="popularThreads">
                {threads}
            </div>
            
            {
            (() => {
                if (username !== 'unknown') {
                    return (
                        <button type="button" className="wide_button" onClick={openAddThreadForm}>Dodaj wątek</button>
                    )
                }
            })()
            }

{
            (() => {
                if (username !== 'unknown') {
                    return (
                        <button type="button" className="wide_button" onClick={openAddSectionForm}>Dodaj sekcje</button>
                    )
                }
            })()
            }
            <button type="button" className="wide_button" onClick={returnToHomePage}>Strona Główna</button>
        </div>
    )
}

export default Sidebar
