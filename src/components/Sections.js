import React, { useState, useEffect } from 'react'
import Item from './Item'
import { getCookie } from '../libraries/Cookie'

function Sections() {
    const [sections, setSections] = useState([])

    useEffect(() => {
        fetch("https://projekt-pp-backend.herokuapp.com/section", {
            method: 'GET',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            }
        }).then(res => res.json().then(data => {
            let result = []
            for (let section of data) {
                result.push(<Item title={section.name} id={section.id} />)
            }
            setSections(result)
        }))
    }, [])

    return (
        <div className="sections">
            {sections}
        </div>
    )
}

export default Sections
