import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import { getCookie } from '../libraries/Cookie'

function AddThreadForm(props) {
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
            if (res.status == 200) {
                let result = []
                for (let section of data) {
                    result.push(<option value={section.id}>{section.name}</option>)
                }
                setSections(result)
            }
        }))
    }, [])

    return (
        <div id="addThreadForm">
            <select id="section" name="sections">
                {sections}
            </select>
            <input type="text" id="topic_filed" placeholder="Nazwa tematu" />
            <textarea></textarea>
            <button type="button">Dodaj wątek</button>
        </div>
    )
}

export default AddThreadForm
