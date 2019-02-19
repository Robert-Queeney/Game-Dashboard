import React from 'react'; 
import ShieldPanel from './shieldPanel'; 
import WeaponPanel from './weaponPanel'; 
import EnginePanel from './enginePanel'; 
import styled from 'styled-components'; 

const PanelWrapper = styled.section`
    width: 100%; 
    height: 200px; 
    // padding: 5px 5px 10px 10px; 
    background-color: #cfd8dc; 
    display: flex; 
    align-items: center; 
    // overflow: wrap;
`

class Panels extends React.Component {
    render(){
        return (
            <PanelWrapper>
                <WeaponPanel addPower={this.addPower}/>
                <ShieldPanel />
                <EnginePanel />
            </PanelWrapper>
        )
    }
}

export default Panels; 