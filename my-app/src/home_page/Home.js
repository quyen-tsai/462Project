import { useState } from 'react'
import React, { Component }  from 'react';
import Navbar from './home_page/components/navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Textbox from './home_page/components/textbox';
import styled from 'styled-components';
function Homes() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        result = await result.json();
        console.warn(result);
        if (result) {
            alert("Data saved successfully");
            setEmail("");
            setName("");
        }
    }
    return (
        <Home>
            <Router><Navbar/></Router>
             <Textbox>

</Textbox>
        </Home>
        
    );
}


export default Homes;

export const Home = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 200px;
align-items: center;

`



