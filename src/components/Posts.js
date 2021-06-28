import React, { useState, useEffect } from 'react'
import Item from './Item'
import Post from './Post'
import { getCookie } from '../libraries/Cookie'
import { decodeToken } from 'react-jwt'

var role

function Topics(props) {
    const [topics, setTopics] = useState([])

    const deletePost = (id) => {

        fetch(`https://projekt-pp-backend.herokuapp.com/topic/${props.threadId}/post/${id}`, {
            method: 'DELETE',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            },
        }).then(res =>{
            if(!res.ok)
            {
                alert("błąd")
            }
            else
            {
            document.location.reload();
            }
        })
    }

    const addPost = () => {
        let json = {
            "text": document.getElementById("post_text").value
        }

        fetch(`https://projekt-pp-backend.herokuapp.com/topic/${props.threadId}/post`, {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            },
            body: JSON.stringify(json)
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                props.setPage(props.PageEnum.section)
                props.setPage(props.PageEnum.thread)
            } else {
                alert(res.status)
            }
        }))
    }

    const closeSection = () => {
        props.setPage(props.PageEnum.home)
        props.setSectionName("Ładowanie...")
    }

    const closeThread = () => {
        props.setPage(props.PageEnum.section)
    }

    useEffect(() => {

        fetch(`https://projekt-pp-backend.herokuapp.com/authorities`, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            }
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                role=data[0].authority
            }
        }))

        fetch(`https://projekt-pp-backend.herokuapp.com/topic/${props.threadId}/post`, {
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
                    result.push(<Post title={post.text} author={post.login} createDate={post.createDate} onClick={() => {deletePost(post.id)}} postRole={role} />)
                }
                setTopics(result)
            }
        }))
    }, [])

    return (
        <div className="sections">
            <div onClick={closeSection}>
                <Item title={props.sectionName} type="section" />
            </div>
            <div className="threads">
                <div onClick={closeThread}>
                    <Item title={props.threadName} description={props.threadDescription} author={props.threadAuthor} type="topic" />
                </div>
                <div className="topics">
                    {topics}
                </div>
            </div>
            {
                (() => {
                    console.log(props.userLogged)
                    if (props.userLogged != 'unknown') {
                        return (
                            <div id="addThreadForm">
                                <textarea id="post_text"></textarea>
                                <button type="button" onClick={addPost}>Dodaj odpowiedź</button>
                            </div>
                        )
                    }
                })()
            }
        </div>
    )
}

export default Topics
