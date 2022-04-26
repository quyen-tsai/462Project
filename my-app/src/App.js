import { useState } from 'react'
import React, { Fragment }  from 'react';
import Navbar from './home_page/navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Textbox from './home_page/textbox';
import styled from 'styled-components';
import Homes from './Homes';
import Login from './Login/Login';
import Signup from './Signup/Signup';
import PlaySound from './components/sound';
function App() {

    const [childData, setChildData] = useState("");
    if(childData == "TRUE"){
        console.log('nice')
    }
    else(console.log("not nice"));
    return (
       
        <Home>
            <Router>
            <Navbar/>
            <Routes>
                <Route path='/' exact element={<Homes/>}/>  
                <Route path='/login' exact element={<Login passChildData={setChildData}/>}/>
                    <Route path='signup' exact element={<Signup/>}/>
            </Routes>
            </Router>
            <PlaySound/>
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


