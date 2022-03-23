import { useState } from 'react'
import React, { Fragment }  from 'react';
import Navbar from './home_page/components/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Textbox from './home_page/components/textbox';
import styled from 'styled-components';
import Homes from './Homes';
import Login from './Login/Login';

function App() {
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
            <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Homes/>}/>  
                <Route path='/login' exact element={<Login/>}/>
            </Routes>
            </Router>
        </Home>
        
        // <Homes></Homes>
    );
}


export default App;

export const Home = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 200px;
align-items: center;
`


