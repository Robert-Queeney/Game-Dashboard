import React from 'react'; 
import UpButton from './upButton'; 
import MaxButton from './maxButton';
import styled from 'styled-components'

const WeaponPanelWrapper = styled.div`
    height: 90%;     
    border: 2px solid black; 
    margin: 20px; 
    display: flex; 
    flex-direction: column; 
    justify-content: space-between; 
`


class WeaponPanel extends React.Component{
    render(){
        return(
            <WeaponPanelWrapper>
                <MaxButton />
                <UpButton onClick={this.addPower}/>
                <div className="weapon-div">Weapon</div>
                <UpButton />
            </WeaponPanelWrapper>
        )
    }
}

export default WeaponPanel; 