import React, { useState, useEffect } from 'react'
import Item from './Item'
import { getCookie } from '../libraries/Cookie'

function Topics(props) {
    const [topics, setTopics] = useState([])

    const closeSection = () => {
        props.setPage(props.PageEnum.home)
        props.setSectionName("Ładowanie...")
    }

    const closeThread = () => {
        props.setPage(props.PageEnum.section)
    }

    useEffect(() => {
        fetch("https://projekt-pp-backend.herokuapp.com/topic", {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            }
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                let result = []
                for (let thread of data) {
                    result.push(<div onClick={() => openThread(thread.id)}><Item title={thread.title} closeSection={closeSection} /></div>)
                }
                setThreads(result)
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
                    <Item title={props.threadName} />
                </div>
                <div className="topics">
                    {topics}
                </div>
            </div>
        </div>
    )
}

export default Topics
