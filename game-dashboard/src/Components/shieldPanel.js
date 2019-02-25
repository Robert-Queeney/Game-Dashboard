import React from 'react'; 
import UpButton from './upButton'; 
import MaxButton from './maxButton';
import '../css/style.css'
// import styled from 'styled-components'

// const ShieldPanelWrapper = styled.div`
//     height: 90%;     
//     // border: 2px solid black; 
//     margin: 10px; 
//     // padding: 5px; 
//     display: flex; 
//     flex-direction: column; 
//     justify-content: space-between; 
//     align-items: center; 
//     width:200px; 
// `

class ShieldPanel extends React.Component{
    render(){
        return(
            <div className="PanelWrappers">
                <button className="MaxButton" onClick={this.props.maxShieldPower}>MAX</button>
                <button className="upButton" onClick={()=>{this.props.upShieldPower(); this.props.reduceTotalPower() }}>^</button>
                <div className="sheild-div">Shields</div>
                <button className="downButton" onClick={()=>{this.props.downShieldPower(); this.props.increaseTotalPower()}}> </button>
            </div>
        )
    }
}

export default ShieldPanel; 