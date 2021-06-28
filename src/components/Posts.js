import React, { useState, useEffect } from 'react'
import Item from './Item'
import Post from './Post'
import { getCookie } from '../libraries/Cookie'

function Topics(props) {
    const [topics, setTopics] = useState([])

    const addPost = () => {

    }

    const closeSection = () => {
        props.setPage(props.PageEnum.home)
        props.setSectionName("Ładowanie...")
    }

    const closeThread = () => {
        props.setPage(props.PageEnum.section)
    }

    useEffect(() => {
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
                setTopics(result)
            }
        }))
    }, [])

    return (
        <div className="sections">
            <div onClick={closeSection}>
                <Item title={props.sectionName} />
            </div>
            <div className="threads">
                <div onClick={closeThread}>
                    <Item title={props.threadName} description={props.threadDescription} author={props.threadAuthor} />
                </div>
                <div className="topics">
                    {topics}
                </div>
            </div>
            <div id="addThreadForm">
                <textarea id="description"></textarea>
                <button type="button" onClick={addPost}>Dodaj odpowiedź</button>
            </div>
        </div>
    )
}

export default Topics
