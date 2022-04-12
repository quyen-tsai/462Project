import styled from 'styled-components'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from "react";
function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const handleOnSubmit = async (e) => {
        e.preventDefault();
        let result = await fetch(
        'http://localhost:5000/register', {
            method: "post",
            body: JSON.stringify({ name, email, password }),
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
            setPassword("");
        }
    }
  return (
    <Boxs>
        <Text>Signing You Up For Productivity!</Text>
        <Smallbox>
            <Form>
                <Label>Full Name: <Input type='text' value={name} onChange={(e) => setName(e.target.value)}></Input></Label>
                <Label2>Email: <Input type='text'  value={email} onChange={(e) => setEmail(e.target.value)}></Input></Label2>
                <Label3>Password: <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)}></Input></Label3>
            </Form>
            <BoxBtnLink onClick={handleOnSubmit} to='/login'>Sign up</BoxBtnLink>
        </Smallbox>
    </Boxs>
  )
}

export default Signup

export const Boxs = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #212121;
    height: 500px;
    width: 70%;
`;

export const Smallbox = styled.div `
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3D3D3D;
    height: 200px;
    width: 450px;
`;


export const Form = styled.form`
  position: static;
  display:flex;
  flex-direction: column;
  flex:1;
  justify-content: center;
  align-items: center;
  gap: 5px;
`
export const Label = styled.label`
    font-size: 25px;
    font-weight: bold;
    color: #27FFC9;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`
export const Label2 = styled.label`
    font-size: 25px;
    font-weight: bold;
    color: #27FFC9;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 72px;
`
export const Label3 = styled.label`
    font-size: 25px;
    font-weight: bold;
    color: #27FFC9;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    height: 30px;
`
export const Text = styled.p`
  font-size: 28px;
  font-weight: bold;
  color: #27FFC9;
  margin-bottom: 30px;
//   text-decoration: underline;
`

export const BoxBtnLink = styled(Link)
`

  width: 450px;
  background: #5AC8C8;
  padding: 15px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* Second Nav */
  font-weight: bold;
  text-align:center;
  align-self: flex-end;
  margin-top:auto;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: #808080;
  }
`;