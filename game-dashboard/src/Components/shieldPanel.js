import React from 'react'; 
import UpButton from './upButton'; 
import MaxButton from './maxButton';
import styled from 'styled-components'

const ShieldPanelWrapper = styled.div`
    height: 90%;     
    border: 2px solid black; 
    margin: 20px; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
`

class ShieldPanel extends React.Component{
    render(){
        return(
            <ShieldPanelWrapper>
                <MaxButton />
                <UpButton />
                <div className="sheild-div">Shields</div>
                <UpButton />
            </ShieldPanelWrapper>
        )
    }
}

export default ShieldPanel; 