import React from 'react'; 
import UpButton from './upButton'; 
import MaxButton from './maxButton';
import styled from 'styled-components'

const ShieldPanelWrapper = styled.div`
    height: 90%;     
    // border: 2px solid black; 
    margin: 10px; 
    // padding: 5px; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    align-items: center; 
    width:200px; 
`

class ShieldPanel extends React.Component{
    render(){
        return(
            <ShieldPanelWrapper>
                <MaxButton handleClick={this.props.maxShieldPower}/>
                <UpButton handleClick={()=>{this.props.upShieldPower(); this.props.reduceTotalPower() }}/>
                <div className="sheild-div">Shields</div>
                <UpButton handleClick={()=>{this.props.downShieldPower(); this.props.increaseTotalPower()}}/>
            </ShieldPanelWrapper>
        )
    }
}

export default ShieldPanel; 