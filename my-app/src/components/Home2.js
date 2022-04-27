import React from 'react'
import styled from 'styled-components'
function Home2() {
  return (
     <Boxs>
         <BoxBtn>
             Test
         </BoxBtn>
         <BoxBtn>
             Test
         </BoxBtn>
         <BoxBtn>
             Test
         </BoxBtn>
         <BoxBtn>
             Test
         </BoxBtn>
     </Boxs>

  )
}

export default Home2;


export const Img = styled.img`
    margin-right: 3em;
`

export const BigText = styled.p`
    font-size: 45px;
    color: white;
    font-weight: bold;
`;

export const SmallText = styled.p`
    font-size: 15px;
    color: white;
`;

export const Boxs = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-between;
    background-color: #212121;
    height: 500px;
    width: 70%;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    margin-left: 8em;
`;

export const BoxBtn = styled.nav `
  display: flex;
  background-color: white;
  align-text: center;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  }
`;



