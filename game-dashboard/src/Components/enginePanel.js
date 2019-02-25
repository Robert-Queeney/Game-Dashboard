import React from 'react'; 
import '../css/style.css'
// import UpButton from './upButton'; 
// import MaxButton from './maxButton';
// import styled from 'styled-components'

// const EnginePanelWrapper = styled.div`
//     height: 90%;     
//     // border: 2px solid black; 
//     margin: 10px; 
//     display: flex; 
//     flex-direction: column; 
//     justify-content: space-between; 
//     align-items: center; 
//     width: 200px; 
// `

class EnginePanel extends React.Component{
    render(){
        return(
            <div className="PanelWrappers">
                <button className="MaxButton" onClick={this.props.maxEnginePower}>MAX</button>
                <button className="upButton" onClick={()=>{this.props.upEnginePower(); this.props.reduceTotalPower()}}>^</button>
                <div className="engine-div">Engine</div>
                <button className="downButton" onClick={()=>{this.props.downEnginePower(); this.props.increaseTotalPower()}}></button>
            </div>
        )
    }
}

export default EnginePanel; 