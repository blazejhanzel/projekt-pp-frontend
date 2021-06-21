import '../App.css'
import React, { useState } from 'react';

function RegisterForm() {

    const registerUser = () => {
        let data = {
            "username": document.getElementById("login_field").value,
            "password": document.getElementById("password_field").value,
            "email": document.getElementById("email_form").value
        }

        
        fetch("https://projekt-pp-backend.herokuapp.com/user", {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => {
                if (response.status === 200) {
                document.location.reload()
                alert("Możesz się zalogować")
            } else {
                alert(response.status)
            }
        }))
    }

    return (
        <div id="registerForm">
            <input type="text" id="login_field" placeholder="login" />
            <input type="password" id="password_field" placeholder="hasło" />
            <input type="text" id="email_form" placeholder="email" />
            <button type="button" onClick={registerUser}>Zarejestruj</button>
        </div>
    )
}

export default RegisterForm
