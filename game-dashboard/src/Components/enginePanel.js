import React from 'react'; 
import UpButton from './upButton'; 
import MaxButton from './maxButton';
import styled from 'styled-components'

const EnginePanelWrapper = styled.div`
    height: 90%;     
    // border: 2px solid black; 
    margin: 10px; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
    align-items: center; 
    width: 200px; 
`

class EnginePanel extends React.Component{
    render(){
        return(
            <EnginePanelWrapper>
                <MaxButton handleClick={this.props.maxEnginePower}/>
                <UpButton handleClick={()=>{this.props.upEnginePower(); this.props.reduceTotalPower()}}/>
                <div className="engine-div">Engine</div>
                <UpButton handleClick={()=>{this.props.downEnginePower(); this.props.increaseTotalPower()}}/>
            </EnginePanelWrapper>
        )
    }
}

export default EnginePanel; 