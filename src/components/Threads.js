import React, { useState, useEffect } from 'react'
import Item from './Item'
import { getCookie } from '../libraries/Cookie'

function Threads(props) {
    const [threads, setThreads] = useState([])

    const closeSection = () => {
        props.setPage(props.PageEnum.home)
        props.setSectionName("Ładowanie...")
    }

    const openThread = (id) => {
        fetch('https://projekt-pp-backend.herokuapp.com/topic/' + id, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            }
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                props.setThreadId(id)
                props.setPage(props.PageEnum.thread)
                props.setThreadName(data.title)
                props.setThreadDescription(data.description)
                props.setThreadAuthor(data.authorId)
            }
        }))
    }

    useEffect(() => {
        fetch(`https://projekt-pp-backend.herokuapp.com/section/${props.sectionId}/topic`, {
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
                    result.push(
                        <div onClick={() => openThread(thread.id)}>
                            <Item title={thread.title} closeSection={closeSection} description={thread.description} author={thread.authorId} />
                        </div>
                        )
                }
                setThreads(result)
            }
        }))
    }, [])

    return (
        <div className="sections">
            <div onClick={closeSection}>
                <Item title={props.sectionName}/>
            </div>
            <div className="threads">
                {threads}
            </div>
        </div>
    )
}

export default Threads
