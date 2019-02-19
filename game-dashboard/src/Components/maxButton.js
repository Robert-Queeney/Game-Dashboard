import React from 'react'; 
import styled from 'styled-components'; 

const ButtonWrapper = styled.button`
    width: 30px;
    height: 30px;  
    display: flex; 
    flex-direction: column; 
    align-content: center;
`

const MaxButton = () => {
   return <ButtonWrapper>
       <span>Max</span>
    </ButtonWrapper>
}

export default MaxButton; 
