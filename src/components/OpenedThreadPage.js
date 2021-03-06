import React, { useState, useEffect } from 'react'
import Item from './Item'
import { getCookie } from '../libraries/Cookie'
import Post from './Post'

function OpenedThreadPage(props) {


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
                            result.push(<Post title={post.text} author={post.login} createDate={post.createDate} />)
                        }
                        props.setPopularPosts(result)
                    }
                }))

            } else {
                alert(res.status)
            }
        }))

    }

    useEffect(() => {
        
    }, [])

    return (
        <div className="sections">
           
            <div className="threads">
                <div >
                    <Item title={props.threadName} description={props.threadDescription} author={props.threadAuthor} type="topic" />
                </div>
                <div className="topics">
                    {props.popularPosts}
                </div>
            </div>
            {
                (() => {
                    console.log(props.userLogged)
                    if (props.userLogged != 'unknown') {
                        return (
                            <div id="addThreadForm">
                                <textarea id="post_text"></textarea>
                                <button type="button" onClick={addPost}>Dodaj odpowied??</button>
                            </div>
                        )
                    }
                })()
            }
        </div>
    )
}

export default OpenedThreadPage
