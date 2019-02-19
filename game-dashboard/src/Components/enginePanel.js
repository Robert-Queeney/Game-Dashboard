import React from 'react'; 
import UpButton from './upButton'; 
import MaxButton from './maxButton';
import styled from 'styled-components'

const EnginePanelWrapper = styled.div`
    height: 90%;     
    border: 2px solid black; 
    margin: 20px; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
`

class EnginePanel extends React.Component{
    render(){
        return(
            <EnginePanelWrapper>
                <MaxButton />
                <UpButton />
                <div className="engine-div">Engine</div>
                <UpButton />
            </EnginePanelWrapper>
        )
    }
}

export default EnginePanel; 