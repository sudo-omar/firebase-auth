import initializeUser from "./signup.js"
import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    
    const handleButtonPress = (event) => {
        initializeUser(email, name)
    }

    return (
        <>
            <input type="text" name="pass" placeholder="pass" onChange={handleNameChange}></input>
            <input type="email" name="email" placeholder="email" onChange={handleEmailChange}></input>
            <button type="submit" onClick={handleButtonPress}>submit form data</button>
        </>
    );


}



export default Form;