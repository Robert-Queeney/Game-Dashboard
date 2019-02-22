import React from 'react'; 
import styled from 'styled-components'; 

const ButtonWrapper = styled.button`
    width: 90%;
    height: 50px;  
    display: flex; 
    flex-direction: column; 
    align-content: center;
    // background-color: #08231e; 
    background-image: linear-gradient(#08231e , #0a1f20);
    color: #28f0e6;

`

const Button = ({handleClick}) => {
   return (
        <ButtonWrapper onClick={handleClick}>
 
        </ButtonWrapper>
    )
}

export default Button; 
