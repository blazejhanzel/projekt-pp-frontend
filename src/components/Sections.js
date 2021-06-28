import React, { useState, useEffect } from 'react'
import Item from './Item'
import { getCookie } from '../libraries/Cookie'

var role

function Sections(props) {
    const [sections, setSections] = useState([])

    const deleteSection = (id) => {
        fetch(`https://projekt-pp-backend.herokuapp.com/section/${id}`, {
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
            window.location.reload();
            }
        })
    }

    const openSection = (id) => {
        fetch('https://projekt-pp-backend.herokuapp.com/section/' + id, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + getCookie("jwt")
            }
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                props.setSectionId(id)
                props.setPage(props.PageEnum.section)
                props.setSectionName(data.name)
            }
        }))
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

        fetch("https://projekt-pp-backend.herokuapp.com/section/", {
            method: 'GET'
        }).then(res => res.json().then(data => {
            if (res.status == 200) {
                let result = []
                for (let section of data) {
                    result.push(<div onClick={() => openSection(section.id)}><Item title={section.name}  onClick={()=>deleteSection(section.id)} postRole={role} type="sections" /></div>)
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
