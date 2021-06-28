import { render } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import { getCookie } from '../libraries/Cookie'

function AddSectionForm(props) {
    
    
    const addSection = () => {

        let section_name = document.getElementById("section_field").value
        if (section_name) {
            let json = {
                "name": section_name,
                "moderatorId": "60cbac661c37770501af8599"
                
            }

            fetch(`https://projekt-pp-backend.herokuapp.com/section`, {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + getCookie("jwt")
                },
                body: JSON.stringify(json)
            }).then(res => res.json().then(data => {
                if (res.status == 200) {
                    alert("Sekcje dodano pomyślnie!")
                } else {
                    alert(res.status)
                }
            }))
        }
    }

    return (
        <div id="addThreadForm">
            <input type="text" id="section_field" placeholder="Nazwa sekcji" />
            <button type="button" onClick={addSection}>Dodaj sekcje</button>
        </div>
    )
}



export default AddSectionForm