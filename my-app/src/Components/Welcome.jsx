import React from 'react'

const boxStyle = {
  fontSize: "50px",
  width: "600px",
  height: "350px",
  background:"rgb(245,245,245)",
  textAlign:"center",
  position:"absolute",
  color:"#262626",
  top: -90,
  left: -50,
  lineHeight:"190px",
  borderRadius:"50px"
}

const Welcome = (props) => {
  return(
    <h2 style={boxStyle}>Welcome to Quizitivity, {props.uName}</h2>
  )
}

export default Welcome;