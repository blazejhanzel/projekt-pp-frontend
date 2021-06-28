import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import { getCookie } from '../libraries/Cookie'

function AddThreadForm(props) {
    const [sections, setSections] = useState([])
    const [selectedValue, setSelectedValue] = useState(null);
 
    useEffect(() => {
        fetch("https://projekt-pp-backend.herokuapp.com/section/", {
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

    const handleChange = (e) => {
        setSelectedValue(e.target.value)
    }
    
    const addTopic = () => {
        if (selectedValue == null) return

        let post_name = document.getElementById("topic_field").value
        let post_description = document.getElementById("description").value

        if (post_name && post_description) {
            let json = {
                "title": post_name,
                "description": post_description
            }

            fetch(`https://projekt-pp-backend.herokuapp.com/section/${selectedValue}/topic`, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getCookie("jwt")
                },
                body: JSON.stringify(json)
            }).then(res => res.json().then(data => {
                if (res.status == 200) {
                    alert("Temat dodano pomyślnie!")
                    window.location.reload()
                } else {
                    alert(res.status)
                }
            }))
        }
    }

    return (
        <div id="addThreadForm">
            <select id="section" name="sections" onChange={handleChange}>
                <option value="null">Wybierz sekcję</option>
                {sections}
            </select>
            <input type="text" id="topic_field" placeholder="Nazwa tematu" />
            <textarea id="description"></textarea>
            <button type="button" onClick={addTopic}>Dodaj temat</button>
        </div>
    )
}



export default AddThreadForm
