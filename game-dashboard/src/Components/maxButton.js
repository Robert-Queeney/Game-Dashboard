import React from 'react'; 
import styled from 'styled-components'; 

const ButtonWrapper = styled.button`
    width: 90%;
    height: 40px;  
    display: flex; 
    flex-direction: column; 
    align-items: center;
    justify-content: center; 
    border-radius: 10px; 
    border: 2px solid #28f0e6;
    background-color: #08231e; 
    color: #28f0e6; 
`

const MaxButton = ({handleClick}) => {
   return <ButtonWrapper onClick={handleClick}>
       MAX
    </ButtonWrapper>
}

export default MaxButton; 
