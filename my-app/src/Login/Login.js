import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Boxs>
      
        <Smallbox>
        <Form>
          <Text> Login:</Text>
          <Label>Username: <Input type='text'></Input></Label>
          <Label2>Password: <Input type='text'></Input></Label2>
          </Form>
        <BoxBtnLink to='/'>Login into your account</BoxBtnLink>
        </Smallbox>
        
      
    </Boxs>
  )
}

export default Login

export const Boxs = styled.div `
    display:flex;
    align-items: center;
    justify-content: center;
    
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
    height: 400px;
    width: 500px;
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
    gap: 22px;
    align-items: center;
    justify-content: center;
`

export const Input = styled.input`
    height: 30px;
`
export const Text = styled.p`
  font-size: 35px;
  font-weight: bold;
  color: #27FFC9;
  margin-bottom: 30px;
  text-decoration: underline;
`

export const BoxBtnLink = styled(Link)
`

  width: 500px;
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