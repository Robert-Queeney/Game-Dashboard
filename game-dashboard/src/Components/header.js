import React from 'react'; 

import styled from 'styled-components'; 

const HeaderWrapper = styled.div`
    // width: 90%; 
    // padding: 5em; 
    display: flex; 
    justify-content: center; 
    background-color: orange; 
`

const Header = () => {
    return <HeaderWrapper>
        POWER DISTRIBUTION
    </HeaderWrapper>
}

export default Header; 