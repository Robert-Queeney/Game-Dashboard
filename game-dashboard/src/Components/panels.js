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
    justify-content: space-evenly; 
    align-content: stretch; 
    align-items: center; 
    flex-wrap: no-wrap; 
     
`

class Panels extends React.Component {
    render(){
        return (
            <PanelWrapper>
                <WeaponPanel 
                    maxWeaponPower={this.props.maxWeaponPower}
                    reduceTotalPower={this.props.reduceTotalPower}
                    increaseTotalPower={this.props.increaseTotalPower}
                    upWeaponPower={this.props.upWeaponPower}
                    downWeaponPower={this.props.downWeaponPower}
                    />
                <ShieldPanel 
                    maxShieldPower={this.props.maxShieldPower}
                    reduceTotalPower={this.props.reduceTotalPower}
                    increaseTotalPower={this.props.increaseTotalPower}
                    upShieldPower={this.props.upShieldPower}
                    downShieldPower={this.props.downShieldPower}
                />
                <EnginePanel 
                    maxEnginePower={this.props.maxEnginePower}
                    reduceTotalPower={this.props.reduceTotalPower}
                    increaseTotalPower={this.props.increaseTotalPower}
                    upEnginePower={this.props.upEnginePower}
                    downEnginePower={this.props.downEnginePower}
                />
            </PanelWrapper>
        )
    }
}

export default Panels; 