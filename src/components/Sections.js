import React, { useState, useEffect } from 'react'
import Item from './Item'
import { getCookie } from '../libraries/Cookie'

function Sections(props) {
    const [sections, setSections] = useState([])

    const openSection = (id) => {
        fetch('https://projekt-pp-backend.herokuapp.com/section/' + id, {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            }
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                props.setPage(props.PageEnum.section)
                props.setItemName(data.name)
                props.setItemId(id)
            }
        }))
    }

    useEffect(() => {
        fetch("https://projekt-pp-backend.herokuapp.com/section", {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            }
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                let result = []
                for (let section of data) {
                    result.push(<div onClick={() => openSection(section.id)}><Item title={section.name} /></div>)
                }
                setSections(result)
            }
        }))
    }, [])

    return (
        <div className="sections">
            {sections}
        </div>
    )
}

export default Sections
